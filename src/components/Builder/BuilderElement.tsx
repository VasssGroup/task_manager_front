"use client"
import type { ELType } from '@/app/types';
import { getKeyFromStructure } from '@/helpers';
import { mapElements, mapComponents } from './mapElement';
import { mapAction } from './mapAction';

const EXTERNAL_FUNCTION = 'EXTERNAL_FUNCTION';

type BuilderElementProps = {
    structure: ELType;
};

export default function BuilderElement({ structure: { tag, className, children, actions, ...otherProps } }: BuilderElementProps) {
    let Component = null;
    let tagName = '';
    if (tag.indexOf('©') >= 0) {
        tagName = tag.slice(1);
        Component = mapComponents[tagName];
    } else {
        tagName = tag.toLowerCase();
        Component = mapElements[tagName];
    }    
    if (!Component) return null;

    const actionsProps:Record<string, Function> = {};

    if (actions?.length) {
        actions.forEach(action => {
            const { eventHandler, executable } = action;
            actionsProps[eventHandler] = async function(...args: any) {                             
                executable?.forEach?.((item) => {
                    console.log(`( eventHandler: [${eventHandler}] ) → ( actionName: [${item.actionName}] )`, { args, params: item.params });
                    if (item.actionName === EXTERNAL_FUNCTION && item.body) {
                        /**
                         * На время разработки
                         */
                        const externalParameters = item.params ? Object.values(item.params).map(i => `${i}`): [];
                        const func = new Function(...externalParameters, item.body);
                        func(...args);
                        //--------------------------
                    } else {
                        const onAction = mapAction[item.actionName];
                        onAction?.(...args, item.params);
                    }
                });                              
            }
        });
    }
    //(Object.keys(otherProps).length || Object.keys(actionsProps).length) && console.log(`( BuilderElement: [] )`, { otherProps, actionsProps });
    if (tagName === 'input' || tagName === 'img' || !children) {
        return <Component {...otherProps} {...actionsProps} className={className} />;
    }

    return <Component {...otherProps} {...actionsProps} className={className}>
        {Array.isArray(children) ? children.map((item, i) => <BuilderElement key={getKeyFromStructure(item, i)} structure={item} />) : children}
    </Component>;
}