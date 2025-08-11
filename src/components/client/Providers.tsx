'use client'
import { useEffect } from 'react';
import { observer} from 'mobx-react-lite';
import { useParams } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import type {
    WithChildrenType, RoutePackType, StructuresMapType,
    StringAndListStringType, StructureType, MapSRNType,
} from '@/app/types';
import { segments2Path } from '@/helpers';
import { RootStoreContext, rootStore } from '@/stores/rootStoreContext';

type ProvidersType = WithChildrenType & {
    routes: RoutePackType | null;
    structures: StructuresMapType;
    mapPreNodes?: MapSRNType; 
};

function name2Structure(names: StringAndListStringType, mapStructures: StructuresMapType): StructureType {
    return Array.isArray(names) ? names.map(name => mapStructures[name]) : mapStructures[names];
}

function name2Node(names: StringAndListStringType, mapNodes: MapSRNType): React.ReactNode | React.ReactNode[] {
    return Array.isArray(names) ? names.map(name => mapNodes[name]) : mapNodes[names];
}

export const Providers = observer(({ children, routes, structures, mapPreNodes }: ProvidersType) => {
    const params = useParams();
    const {
        cms: {
            setRoutes, setSegments, setCurrentStructures,
            setStructures, setMapPreNodes, setCurrentNodes,
            currentStructures
        }, 
        cms
    } = rootStore;
    const segments = params.routes || [];
    const segPath = segments2Path(segments);
    console.log('Providers ○ [params]:', { params, cms, pathFromSegments: cms.pathFromSegments, segPath, mapPreNodes });

    const getCurrentNodes = () => {
        if (!cms.routes || !cms.mapPreNodes) {
            return null;
        }
        const names = cms.routes[segPath];

        if (!names) {
            //----- 404
            return {
                topArea: name2Node('HEADER', cms.mapPreNodes),
                workArea: name2Node('404', cms.mapPreNodes),
                bottomArea: name2Node('FOOTER', cms.mapPreNodes)
            };
        }

        return {
            topArea: names.topArea ? name2Node(names.topArea, cms.mapPreNodes) : undefined,
            workArea: name2Node(names.workArea, cms.mapPreNodes),
            bottomArea: names.bottomArea ? name2Node(names.bottomArea, cms.mapPreNodes) : undefined,
        };
    }

    const getCurrentStructures = () => {
        console.log('Providers •○• [getCurrentStructures]:', { params, cms, selectedRoutes: cms.routes?.[cms.pathFromSegments], pathFromSegments: cms.pathFromSegments, segPath });
        if (!cms.routes || !cms.structures) {
            return null;
        }
        const names = cms.routes[segPath];

        if (!names) {
            //----- 404
            return {
                topArea: name2Structure('HEADER', cms.structures),
                workArea: name2Structure('404', cms.structures),
                bottomArea: name2Structure('FOOTER', cms.structures)            
            };
        }        

        return {
            topArea: names.topArea ? name2Structure(names.topArea, cms.structures) : undefined,
            workArea: name2Structure(names.workArea, cms.structures),
            bottomArea: names.bottomArea ? name2Structure(names.bottomArea, cms.structures) : undefined
        };
    }
    
    useEffect(() => {

        if (routes !== cms.routes) {
            setRoutes(routes);
            //console.log('►►► setRoutes', { routes });
        }
        if (cms.structures !== structures) {
            setStructures(structures);
            setMapPreNodes(mapPreNodes!);
        }

        if (cms.routes !== null && (segPath !== cms.pathFromSegments || !currentStructures)) {
            const structures = getCurrentStructures();
            const nodePack = getCurrentNodes();
            setCurrentStructures(structures);
            setCurrentNodes(nodePack);
            console.log('►►► setCurrentStructures ○', { structures, currentStructures, nodePack });            
        }
        if (segPath !== cms.pathFromSegments) {
            setSegments(segments);
            //console.log('►►► setSegments', { segments });
        }

    }, [ segPath, routes, structures, currentStructures ]);

    return <SessionProvider>
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    </SessionProvider>;
});