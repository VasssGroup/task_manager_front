import type { BuilderElementProps } from '@/app/types';
import { getKeyFromStructure } from '@/helpers';
import { SIC } from '@/constants';
import { mapElements } from '../mapElement';
import ClientBuilderElement from '../BuilderElement';

const CLIENT_TAGS: string[] = ['form', 'input', 'textarea', 'button'];

export default async function BuilderElement({ structure }: BuilderElementProps) {
    //console.log('BuilderElement:', { structure });
    if (structure.actions?.length || CLIENT_TAGS.includes(structure.tag) || structure.tag.indexOf(SIC) >= 0) {
        return <ClientBuilderElement structure={structure} />;
    }
    const { tag, className, children, ...otherProps } = structure;
    let Component = mapElements[tag];
    if (!Component) return null;

    if (tag === 'img' || !children) {
        return <Component {...otherProps} className={className} />;
    }

    return <Component {...otherProps} className={className}>
        {Array.isArray(children) ? children.map((item, i) => <BuilderElement key={getKeyFromStructure(item, i)} structure={item} />) : children}
    </Component>;
}