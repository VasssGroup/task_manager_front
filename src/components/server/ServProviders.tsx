import type { WithChildrenType } from '@/app/types';
import { getRoutes } from '@/helpers/getRoutes';
import { getStructures } from '@/helpers/getStructures';
import { Providers } from '../client/Providers';

export default async function ServProvider({ children }: WithChildrenType) {
    const routePack = await getRoutes();
    const { mapStructures, mapPreNodes } = await getStructures();
    //    
    //const routes = {}
    console.log('•○• ServProvider: ky-ky', { mapStructures, routePack, mapPreNodes });
    
    return <Providers routes={routePack} structures={mapStructures} mapPreNodes={mapPreNodes}>{children}</Providers>;
}