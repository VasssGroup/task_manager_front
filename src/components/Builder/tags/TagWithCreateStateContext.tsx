"use client"
import { ReactNode, createContext, useState } from 'react';
import { observer} from 'mobx-react-lite';
import type { JSXType, StateType } from '@/app/types';
import type { CreateStateContextData, CreateStateConfigType, ContextValueType } from './hooks';
import { useCreateState } from './hooks';

const defaultContext: ContextValueType = {
    state: { defaultContext: 'defaultContext' },
    setState: () => {}
}

export const TagContext = createContext<ContextValueType>(defaultContext);

type TagProviderProps = {
    stateConfig?: CreateStateConfigType;
    children?: ReactNode;
};

const TagProvider = ({ stateConfig, children }: TagProviderProps) => {
    const [ state, setState ] = useState<StateType>(stateConfig?.defaultState || {createStateStage:'♦ StartState ♦'});

    return <TagContext.Provider value={{ state, setState }}>{children}</TagContext.Provider>;
}

type TagWithCreateStateContextProps = {
    Element: JSXType;
    createStateContextData: CreateStateContextData;
    children?: ReactNode;
    [key: string]: any;
};

const TagCreateState = ({ Element, createStateContextData, children,  ...otherProps }: TagWithCreateStateContextProps) => {
    useCreateState(createStateContextData);

    return <Element {...otherProps}>{children}</Element>;
};


export const TagWithCreateStateContext = ({ Element, createStateContextData, children,  ...otherProps }: TagWithCreateStateContextProps) => 
    (<TagProvider stateConfig={createStateContextData.stateConfig}>
        <TagCreateState
            Element={Element}
            createStateContextData={createStateContextData}
            {...otherProps}
        >{children}</TagCreateState>;
    </TagProvider>);

export const TagWithCreateStateMobX = observer(TagCreateState);
/*({ Element, createStateContextData, children,  ...otherProps }: TagWithCreateStateContextProps) => 
    <TagCreateState
        Element={Element}
        createStateContextData={createStateContextData}
        {...otherProps}
    >{children}</TagCreateState>;*/