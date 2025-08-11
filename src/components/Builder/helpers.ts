import type { ExecutableType, ListFunctionsType, ChainsMap, ReasultProcessingExecutableType, ChainResultType, ArgsType } from '@/app/types';
import { CUSTOM_FUNCTION, EXTERNAL_FUNCTION } from '@/constants';
import { promiseWrapper } from '@/helpers';
import { mockActionsFromOutside } from '@/helpers/mapMockAFO';
import { mapAction } from './mapAction';

export const processingExecutable = (executable: ExecutableType): ReasultProcessingExecutableType => {
    let stateType: string | undefined;
    let stateItems: any;
    const funcs: ListFunctionsType = [];
    const chains: ChainsMap = {};                      
    executable?.forEach?.((item) => {
        if (item.actionName === CUSTOM_FUNCTION && item.body) {
            //
            const body = mockActionsFromOutside[item.body];
            const externalParameters = item.params ? Object.values(item.params).map(i => `${i}`) : [];
            const func = new Function(...externalParameters, item.chain ? promiseWrapper(body) : body);
            if (item.chain) {
                if (!Array.isArray(chains[item.chain])) chains[item.chain] = [];
                chains[item.chain].push(func);
            } else {
                funcs.push({ func, hasAsync: item.async });
            }      
            
            if (item.stateConfig) {
                const { type } = item.stateConfig;
                stateType = type || stateType;
                //
                stateItems = item.stateConfig.stateItems;
            }
            //
        } else if (item.actionName === EXTERNAL_FUNCTION && item.body) {
            /**
             * На время разработки
             */
            const externalParameters = item.params ? Object.values(item.params).map(i => `${i}`) : [];
            const func = new Function(...externalParameters, item.body);
            funcs.push({ func, hasAsync: item.async });
            //--------------------------
        } else {
            const func = mapAction[item.actionName];
            funcs.push({ func, hasAsync: item.async });
        }
    });

    return {
        funcs,
        chains,
        stateType,
        stateItems
    };
};

export const doExecutable = async (args: ArgsType, funcs: ListFunctionsType, chains?: ChainsMap) => {
    if (funcs?.length) {
        funcs.forEach(async ({ func, hasAsync }) => {
            if (hasAsync) {
                await func.apply(this, args);
            } else {
                func.apply(this, args);
            }
        });
    }

    if (chains && Object.keys(chains).length) {
        //console.log('doExecutable ► [chains]:', { chains });
        const chainKeys = Object.keys(chains);
        chainKeys.forEach(async keyChain => {
            let result: ChainResultType = null;
            let first = true;
            for (const func of chains[keyChain]) {
                if (first) {
                    first = false;
                    result = await func.apply(this, args);
                    //console.log('result:', { first, result });
                } else {
                    result = await func.apply(this, args);
                }
            }
        });
    }
};