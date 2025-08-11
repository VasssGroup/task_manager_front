import type { MapType } from '@/app/types';

export const mockActionsFromOutside: MapType<string> = {
    'action-N01': `       
        const inputName = document.querySelector('div.bg-yellow-100 > form > input[name="name"]');
        if (inputName && inputName.defaultValue !== undefined) inputName.defaultValue = '♦ Ky - Ky ♥';        
        console.log("Hi [action-N01]", { e, inputName });

        done('string from [action-N01]');
    `,
    'action-R18': `
        console.log("Hi [action-R18]", { prev });
        done();
    `,
    'action-onMount':`
        const { state, setState } = ctx;
        const { stateItems } = cfg;
        console.log("Hi [action-onMount]", { state, stateItems, upState });
        const timeOut = setTimeout(() => {
            clearTimeout(timeOut);
            const data = {
                res: {
                    data: 'InsideData!!!',
                    otherData: {
                        param1: 'String...',
                        param2: 153,
                        param3: ['asd', 4, 'qwe']
                    }
                }
            };

            upState(stateItems, data);            
        }, 2000);
    `,
    'action-update-from-store': `
        console.log("Hi [action-update-from-store]", { });
    `
};