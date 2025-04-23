import type { SementsType, ELType } from '@/app/types';

export const segments2Path = (segments: SementsType) => `/${Array.isArray(segments) ? segments.join('/') : segments}`;

export const getKeyFromStructure = (structure: ELType, i: number) => `${structure.tag}_${i}_${structure.id || structure.name || structure.className}`;

export function getDeepParam(obj: any, propList: string[]) {
    const param = propList[0];
    propList.shift();
    if (propList.length > 0) {
        return getDeepParam(obj[param], propList);
    }

    return obj[param];
}