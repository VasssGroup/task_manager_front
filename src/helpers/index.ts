import type { SementsType, ELType, StateType } from '@/app/types';

export const segments2Path = (segments: SementsType) => `/${Array.isArray(segments) ? segments.join('/') : segments}`;

export const getKeyFromStructure = (structure: ELType, i: number) => `${structure.tag}_${i}_${structure.id || structure.name || structure.className}`;

// Добавить в getDeepValue !!!
export function getDeepParam(obj: any, propList: string[]) {
    const param = propList[0];
    propList.shift();
    if (propList.length > 0) {
        return getDeepParam(obj[param], propList);
    }

    return obj[param];
}

export const promiseWrapper = (body: string) => `return new Promise((done, error) => {${body}})`;

export const getDeepValue = (data: StateType, path: string): any => {
    if (!data || !path) return;
    const propName = path.split('.')[0];
    if (propName === path) {
        return data[propName];
    } 

    return getDeepValue(data[propName], path.replace(`${propName}.`, ''));
}