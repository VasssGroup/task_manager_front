"use client"
import { ReactNode } from 'react';
import { observer} from 'mobx-react-lite';
import type { JSXType } from '@/app/types';
import { UseStateContextData, useStateContext, useStore } from './hooks';

export type TagWithUseStateContextProps = {
    Element: JSXType;
    effectStateContextData: UseStateContextData;
    children?: ReactNode;
    isNoCloseTag?: boolean;
    [key: string]: any;
};

export const TagWithUseStateContext = ({ Element, effectStateContextData, children, isNoCloseTag, ...otherProps }: TagWithUseStateContextProps) => {
    useStateContext(effectStateContextData);

    if (isNoCloseTag) {
        return <Element {...otherProps} />;
    }

    return <Element {...otherProps}>{children}</Element>;
}

export const TagWithUseStore = observer(({ Element, effectStateContextData, children, isNoCloseTag, ...otherProps }: TagWithUseStateContextProps) => {
    const { children: storeChildren, ...storeProps } = useStore(effectStateContextData);

    if (isNoCloseTag) {
        return <Element {...otherProps} {...storeProps} />;
    }

    return <Element {...otherProps} {...storeProps}>{storeChildren || children}</Element>;
});