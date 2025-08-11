"use client"
import { Div } from '@/components/Builder/tags';
import type { TagWithUseStateContextProps } from '@/components/Builder/tags/TagWithUseStateContext';

type CollectionProps = TagWithUseStateContextProps & {
    items: any[];
};

export const Collection = ({ Element = Div, effectStateContextData, isNoCloseTag, children, items, ...otherProps }: CollectionProps) => {
    

    if (isNoCloseTag) {
        return <Element {...otherProps} />;
    }

    return <Element {...otherProps}>{children}</Element>;
}