import { makeAutoObservable } from 'mobx';
import type { StateType, MapType } from '@/app/types';
import { getDeepValue } from '@/helpers';
import { CreateStateConfigType } from '@/components/Builder/tags/hooks';

class ShareStore {
    store: StateType = {};

    get state() {
        return { ...this.store };
    };
    get hasStoreData() {
        return !!this.store.data;
    };

    constructor() {
        makeAutoObservable(this);
    };

    getItemsFromStore = (stateItems: CreateStateConfigType['stateItems']) => {
        const items: MapType = {};
        stateItems.forEach(({ name, value }) => {
            items[name] = getDeepValue(this.store, `${value}`);
        });

        return items;
    }

    setStore = (store: StateType) => {
        this.store = store;

        console.log('↑↑↑ ○♥ [bufferStore] ♥○ ↓↓↓ > SetStore < ○→→→→', { store: this.store });
    };

    updateStore = (stateItems: CreateStateConfigType['stateItems'], targetData: StateType) => {
        if (!stateItems?.length) return;
        console.log('↑↑↑ ○♥ [bufferStore] ♥○ ↓↓↓ ► [B] CreateStore ◄ ○→→→→', { store: this.store });
        const newStore: StateType = {};
        for (const item of stateItems) {
            newStore[item.name] = getDeepValue(targetData, `${item.value}`);
        }

        this.store = newStore;
        console.log('↑↑↑ ○♥ [bufferStore] ♥○ ↓↓↓ ► CreateStore ◄ ○→→→→', { store: this.store, newStore });
    };
}

const storeShare = new ShareStore();

export default storeShare;