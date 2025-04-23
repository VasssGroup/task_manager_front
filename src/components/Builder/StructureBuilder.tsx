import { ReactNode } from 'react';
import type { StructureType } from '@/app/types';
import { getKeyFromStructure } from '@/helpers';
import BuilderElement from './BuilderElement';

type StructuresBuilderProps = {
    structures: StructureType;
    preNodes?: ReactNode | ReactNode[];
}

export default function StructureBuilder({ structures, preNodes }: StructuresBuilderProps) {    
    console.log('•○• StructureBuilder: ky-ky', { structures, preNodes });
    if (preNodes !== undefined && Array.isArray(preNodes)) {
        console.log('•○• Draw Array [preNodes]', { preNodes });
        return preNodes.map((Component) => Component);
    }

    if (preNodes !== undefined) {
        console.log('•○• Draw [preNodes]', { preNodes });
        return preNodes;
    }

    if (Array.isArray(structures)) {
        console.log('•○• Draw Array [structures]', { structures });
        return structures.map((structure, i) => <BuilderElement key={getKeyFromStructure(structure, i)} structure={structure}/>);
    }

    console.log('•○• Draw [structures]', { structures });
    return <BuilderElement structure={structures}/>;
}