import { useEffect, useState, useContext, Dispatch, SetStateAction } from 'react';
import type { StateType, MapType } from '@/app/types';
import { getDeepValue } from '@/helpers';
import { useStores } from '@/stores/rootStoreContext';
import { TagContext } from './TagWithCreateStateContext';

export type EffectData = {
    mount?: Function;
    update?: Function;
    unmount?: Function;
    dependencies?: Function;
}

export const useSelectUseEffect = (data: EffectData) => {
    const isMount = !!data.mount;
    const isUpdate = !!data.update;
    const isUnmount = !!data.unmount;
    
    if (!isUpdate && !isMount && !isUnmount) {
        return;
    }   

    const effect = () => {
        console.log(`TagWithUseEffect [♦ effect ♦]`, { data, isMount, isUpdate, isUnmount });
        data.mount?.();
        data.update?.();

        return data.unmount?.();
    }
    
    console.log(`TagWithUseEffect [♦ dependencies ♦]`, { data, dependencies: data?.dependencies, isMount, isUpdate, isUnmount });

    useEffect(effect, data?.dependencies?.() || data.mount ? [] : undefined);
}



type StateItemType<T> = {
    name: string;
    value?: T;
    getValue?: (name?: string) => T;
}

export type CreateStateConfigType<T = StateType> = {
    stateItems: StateItemType<T>[];
    stateType: string;
    depsItems?: string[];
    defaultState?: T;
}

export type CreateStateContextData = {
    stateConfig?: CreateStateConfigType;
    mount?: Function;
    update?: Function;
    unmount?: Function;
    dependencies?: Function;
}
export type ContextValueType<T = StateType> = {
    state: T;
    setState: Dispatch<SetStateAction<T>>;
}

export const useCreateContextState = (stateConfig?: CreateStateConfigType) => {
    const [ state, setState ] = useState<StateType>(stateConfig?.defaultState || {createStateStage:'♦ StartState ♦'});
    const contextValue: ContextValueType = {
        state,
        setState
    }

    //contextValue.setState({createStateStage:'♣ StartState ♣'});

    return contextValue;
}

export const useCreateState = (data: CreateStateContextData) => {
    //const ctx2 = useContext(TagContext);
    const { share } = useStores();
    const { store, setStore, state, hasStoreData, updateStore } = share;
    const { stateConfig } = data;
    const ctx = {
        state,
        //store,
        //hasStoreData,
        setState: setStore
    };
   
    const deps = [ hasStoreData ]; //data?.dependencies?.(ctx, stateConfig) || data.mount ? [] : undefined;

    console.log('○ useStores ••♦►', { share, hasStoreData });

    useEffect(() => {
        console.log(`► CreateStateEffect ◄ ← •☺☻☺• → [useEffect]`, { ctx, stateConfig, deps, store, state: share.state, hasStoreData });

        /*if (!ctx.state?.ky) {  
            const testData = { ky: 'ky-ky-pyky' };
            ctx.setState(testData);
            console.log('♦♦♦♦►► Test state • setBufferStore • (ky)', { state: {...ctx.state}, storeBuffer, bufferStore, testData, ctx2 });
        }*/

        data.mount?.(ctx, stateConfig, updateStore);
        data.update?.(ctx, stateConfig);
        console.log(`♦ StateEffect ♦ ← •☺☻☺• → [useEffect]`, { ctxState: ctx.state, deps, store: share.store, state: share.state, share, hasStoreData });

        return data.unmount?.(ctx, stateConfig);
    }, deps);

    //return contextValue;
}

type StateConfigType<T = StateType> = {
    stateItems: StateItemType<T>[];
    stateType: string;
    depsItems?: string[];
}

export type UseStateContextData = {
    stateConfig?: StateConfigType;
    mount?: Function;
    update?: Function;
    unmount?: Function;
    dependencies?: Function;
}

export const useStateContext = ({ stateConfig, mount, update, unmount, dependencies }: UseStateContextData) => {
    const ctx = useContext(TagContext);

    useEffect(() => {
        mount?.(ctx, stateConfig);
        update?.(ctx, stateConfig);
        
        return unmount?.(ctx, stateConfig);
    }, dependencies?.(ctx, stateConfig) || mount ? [] : undefined);
};

export const useStore = ({ stateConfig }: UseStateContextData) => {
    const { share: { getItemsFromStore } } = useStores();
    if (!stateConfig?.stateItems) return {} as MapType;

    return getItemsFromStore(stateConfig.stateItems);
}

export const useEffectState = ({ stateConfig, mount, update, unmount, dependencies }: UseStateContextData) => {
    const { share } = useStores();
    const { store, setStore } = share;
    const ctx = { state: store, setState: setStore };

    useEffect(() => {
        mount?.(ctx, stateConfig);
        update?.(ctx, stateConfig);
        
        return unmount?.(ctx, stateConfig);
    }, dependencies?.(ctx, stateConfig) || mount ? [] : undefined);
}; 