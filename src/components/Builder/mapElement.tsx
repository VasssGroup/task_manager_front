import type { MapSJSXType } from '@/app/types';
import * as TAGS from './tags';
import { Menu } from '@/components/shared/Menu';
import { Collection } from '@/components/shared/Collection';

function createMapElements() {
    const mapElements: MapSJSXType = {};
    Object.entries(TAGS).forEach(([ key, value ]) => {
        mapElements[key.toLowerCase()] = value;
    });

    return mapElements;
}

export const mapElements = createMapElements();

export const mapComponents: MapSJSXType = {
    Menu,
    Collection
};