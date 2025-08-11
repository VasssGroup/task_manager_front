import type { JSXType } from '@/app/types';
import type { CreateStateContextData } from './hooks';
import { TagWithUseEffect } from './TagWithUseEffect';
import { TagWithCreateStateMobX } from './TagWithCreateStateContext';
import { TagWithUseStateContext, TagWithUseStore } from './TagWithUseStateContext';

type TagWithEffectProps = {
    Element: JSXType;
    effectData: CreateStateContextData;
    [key: string]: any;
};

export const TagWithEffect = ({ Element, effectData, ...otherProps }: TagWithEffectProps) => {
    if (effectData.stateConfig?.stateType === 'create') {
        // create state
        return <TagWithCreateStateMobX Element={Element} createStateContextData={effectData} {...otherProps} />
    }

    if (effectData.stateConfig?.stateType === 'use') {
        // use state
        return <TagWithUseStateContext Element={Element} effectStateContextData={effectData} {...otherProps} />
    }

    if (effectData.stateConfig?.stateType === 'readStore') {
        // Read from Store
        return <TagWithUseStore Element={Element} effectStateContextData={effectData} {...otherProps} />
    }

    // simple effect
    return <TagWithUseEffect Element={Element} effectData={effectData} {...otherProps} />
}