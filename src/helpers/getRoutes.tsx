import type { RoutePackType } from '@/app/types';
import { ROOT_URL } from '@/constants';

function getRoutePackURL(name: string) {
    return `${ROOT_URL}/api/routes/r?name=${name}`;
}

export async function getRoutes() {
    try {
        //console.log('{getRoutes} start:');
        const response = await fetch(getRoutePackURL('A1'));
        //console.log('{getRoutes} response:', { response });
        const routePack = await response.json(); 
        //console.log('{getRoutes} routePack:', { routePack });

        //console.log('{getRoutes} routes:', { routes: routePack.json });

        return routePack.json as RoutePackType;
    } catch (error) {
        console.log('○•► error:', { error });
        return null;
    }
}