"use client"
import { ReactNode } from 'react';
import type { JSXType } from '@/app/types';
import { useSelectUseEffect } from './hooks';
import type { EffectData } from './hooks';

type TagWithUseEffectProps = {
    Element: JSXType;
    effectData: EffectData;
    children?: ReactNode;
    isNoCloseTag?: boolean;
    [key: string]: any;
};

export const TagWithUseEffect = ({ Element, effectData, children, isNoCloseTag, ...otherProps }: TagWithUseEffectProps) => {
    useSelectUseEffect(effectData);

    if (isNoCloseTag) {
        return <Element {...otherProps} />;
    }

    return <Element {...otherProps}>{children}</Element>;
}