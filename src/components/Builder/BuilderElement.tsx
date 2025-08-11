"use client"
import type { MapType, ArgsType, BuilderElementProps } from '@/app/types';
import type { CreateStateContextData, ContextValueType, CreateStateConfigType } from './tags/hooks';
import { getKeyFromStructure, getDeepValue } from '@/helpers';
import { SIC, LC_EVENT_HANDLERS } from '@/constants';
import { TagWithEffect } from './tags/TagWithEffect';
import { mapElements, mapComponents } from './mapElement';
import { processingExecutable, doExecutable } from './helpers';

export default function BuilderElement({ structure: { tag, className, children, actions, ...otherProps } }: BuilderElementProps) {
    let Component = null;
    let tagName = '';
    if (tag.indexOf(SIC) === 0) {
        tagName = tag.slice(SIC.length);
        Component = mapComponents[tagName];
    } else {
        tagName = tag.toLowerCase();
        Component = mapElements[tagName];
    }    
    if (!Component) return null;

    const actionsProps: MapType<Function> = {};

    let hasEffectActions = false;
    const effectData: CreateStateContextData = {};

    if (actions?.length) {
        actions.forEach(action => {
            const { eventHandler, executable } = action;
            //
            const { funcs, chains, stateType, stateItems } = processingExecutable(executable);
            const lowerEventHandler = eventHandler.toLowerCase();
            if (LC_EVENT_HANDLERS.includes(lowerEventHandler)) {
                console.log('lowerEventHandler ►►►►►►', { eventHandler, lowerEventHandler });
                if (stateType) {
                    effectData.stateConfig = {
                        stateItems,
                        stateType
                    };
                }
                switch (lowerEventHandler) {
                    case LC_EVENT_HANDLERS[0]: 
                        hasEffectActions = true;                        
                        effectData.mount = async function(...args: ArgsType) {
                            console.log('mount → [RUN]', { args, });
                            // Load
                            await doExecutable(args, funcs, chains);
                        };
                        effectData.update = undefined;
                        effectData.dependencies = (ctx: ContextValueType, cfg: CreateStateConfigType) => {
                            const { state } = ctx;
                            const { depsItems } = cfg;

                            const deps = depsItems?.map(item => getDeepValue(state, item)) || [];
                            console.log('►♦♦♦♦◄ [deps]:', { deps, depsItems });

                            return deps;
                        };
                        break;
                    case LC_EVENT_HANDLERS[1]:
                        hasEffectActions = true;                        
                        effectData.unmount = async function(...args: ArgsType) {
                            // Destroy
                            await doExecutable(args, funcs, chains);
                        };
                        break;
                    case LC_EVENT_HANDLERS[2]:
                        hasEffectActions = true;                        
                        effectData.update = async function(...args: ArgsType) {
                            // Reload
                            await doExecutable(args, funcs, chains);
                        };
                        effectData.mount = undefined;
                        effectData.dependencies = undefined;                        
                        break;
                    default: break;
                }
            } else {                         
                actionsProps[eventHandler] = async function(...args: ArgsType) {
                    //console.log(`eventHandler: [${eventHandler}] `, { eventHandler, args, funcs, chains });
                    await doExecutable(args, funcs, chains);                    
                }
            }
        });
    }

    if (tagName !== tag.toLowerCase()) {
        // Внутренние компоненты
    }

    const childrens = Array.isArray(children) ? children.map((item, i) => <BuilderElement key={getKeyFromStructure(item, i)} structure={item} />) : children;

    if (hasEffectActions && (tagName === 'input' || tagName === 'img' || !children)) {
        return <TagWithEffect
            {...otherProps}
            {...actionsProps}
            className={className}
            Element={Component}
            effectData={effectData} 
            isNoCloseTag           
        />;
    } else if (hasEffectActions) {
        return <TagWithEffect
            {...otherProps}
            {...actionsProps}
            className={className}
            Element={Component}
            effectData={effectData}            
        >
            {childrens}
        </TagWithEffect>;
    }

    //(Object.keys(otherProps).length || Object.keys(actionsProps).length) && console.log(`( BuilderElement: [] )`, { otherProps, actionsProps });
    if (tagName === 'input' || tagName === 'img' || !children) {
        return <Component {...otherProps} {...actionsProps} className={className} />;
    }

    return <Component {...otherProps} {...actionsProps} className={className}>{childrens}</Component>;
}