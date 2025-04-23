'use client'
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores/rootStoreContext';
import { Div } from '@/components/Builder/tags';
import { StructureBuilder } from '@/components/Builder';

export const PageCreator = observer(() => {    
    const { cms: { currentStructures, currentNodes } } = useStores();
    console.log('•○• PageCreator: ky-ky', { currentStructures, currentNodes });

    if (currentStructures === null) return null;

    if (currentNodes !== null) {
        return <Div className='flex flex-col min-h-dvh'>
            {currentNodes.topArea && <StructureBuilder structures={currentStructures.topArea!} preNodes={currentNodes.topArea} />}
            <StructureBuilder structures={currentStructures.workArea!} preNodes={currentNodes.workArea} />
            {currentNodes.bottomArea && <StructureBuilder structures={currentStructures.bottomArea!} preNodes={currentNodes.bottomArea} />}
        </Div>;
    }

    return <Div className='flex flex-col min-h-dvh'>
        {currentStructures.topArea && <StructureBuilder structures={currentStructures.topArea} />}
        <StructureBuilder structures={currentStructures.workArea} />
        {currentStructures.bottomArea && <StructureBuilder structures={currentStructures.bottomArea} />}
    </Div>;
});