import { makeAutoObservable } from 'mobx';
import type { RoutePackType, RouteStructurePackValueType, RouteNodePackValueType, SementsType, StructuresMapType, MapSRNType } from '@/app/types';
import { segments2Path } from '@/helpers';

class CMSStore {
    routes: RoutePackType | null = null;
    currentStructures: RouteStructurePackValueType | null = null;
    currentNodes: RouteNodePackValueType | null = null;
    structures: StructuresMapType | null = null;
    segments: SementsType = [];
    mapPreNodes: MapSRNType = {};
    get pathFromSegments() {
        return segments2Path(this.segments);
    }
    constructor() {
        makeAutoObservable(this);
    }
    setRoutes = (routes: RoutePackType | null) => this.routes = routes;
    setCurrentStructures = (currentStructures: RouteStructurePackValueType | null) => this.currentStructures = currentStructures;
    setCurrentNodes = (currentNodes: RouteNodePackValueType | null) => this.currentNodes = currentNodes;
    setSegments = (segments: SementsType) => this.segments = segments;
    setStructures = (structures: StructuresMapType | null) => this.structures = structures;
    setMapPreNodes = (mapPreNodes: MapSRNType) => this.mapPreNodes = mapPreNodes;
}

const storeCMS = new CMSStore();

export default storeCMS;