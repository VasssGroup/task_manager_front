import { createContext, useContext } from 'react';
import RootStore from './rootStore';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
    const ctx = useContext(RootStoreContext);

    if (ctx === null) {  
        throw new Error('conext: NULL !!!');
    }

    return ctx;
}

export const rootStore = new RootStore();