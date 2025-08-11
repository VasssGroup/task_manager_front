import type { MapSRNType } from '@/app/types';
//import { getRoutes } from './getRoutes';
import { ServerBuilder } from '@/components/Builder';
import { mapStructures } from './mapStructures';

export async function getStructures() {
    'use server';
    /*const routePack = await getRoutes();
    //console.log('►♦◄ getStuctures', { routePack });  
   
    const route2Structures: RouteStructurePackType = {};
    if (routePack) {
        Object.entries(routePack).forEach(([path, areas]) => {
            const { topArea, workArea, bottomArea } = areas;

            route2Structures[path] = {
                workArea: Array.isArray(workArea) ? workArea.map(name => mapStructures[name]) : mapStructures[workArea],
                topArea: Array.isArray(topArea) ? topArea.map(name => mapStructures[name]) : topArea ? mapStructures[topArea] : undefined,
                bottomArea: Array.isArray(bottomArea) ? bottomArea.map(name => mapStructures[name]) : bottomArea ? mapStructures[bottomArea] : undefined
            };              
        });
    }*/
    const mapPreNodes: MapSRNType = {};
    Object.entries(mapStructures).map(([key, structure]) => {
        //
        mapPreNodes[key] = <ServerBuilder structure={structure} />;
    })
    
    return {
        mapStructures,
        mapPreNodes
    };
}