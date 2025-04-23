import { FC, ReactNode, JSX, HTMLAttributes } from "react";

export type WithChildrenType = Readonly<{
    children: ReactNode;
}>;

export type MapType<T = any> = Record<string, T>;

export type StringAndListStringType = string | string[];

export type MapSRNType = MapType<ReactNode>;
export type MapSSType = MapType<string>;

interface TagProps<T> extends HTMLAttributes<T> {
    children?: ReactNode;
}

export type ElementType<T = HTMLElement> = FC<TagProps<T>>;

//type HTMLAllElements = HTMLElement | HTMLDivElement | HTMLAnchorElement | HTMLQuoteElement | HTMLLabelElement | HTMLFormElement | HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement | HTMLSelectElement | HTMLOptionElement;
export type MapSJSXType = MapType<(props: any) => JSX.Element>;

export type RoutesType = MapSRNType | null;
export type SementsType = StringAndListStringType;

export type StructureValueType = string | number | boolean | object | null | symbol;

export type SimpleType = string | number | boolean;

export type ObjectListType = object[];

export type SimpleObjectType = SimpleType | object | ObjectListType | undefined;

export type MapStructuresType = MapType<StructureValueType>;

export type StructuresType = MapStructuresType | null;

export type ActionParamsType = {
    putList?: object[];
    [key: string]: SimpleObjectType;    
};

export type AnyFunction = (...props: any) => void | Promise<void>;

export type ExecutableType = {
    actionName: string;  
    params?: ActionParamsType;
    body?: string;
    //func: (...props: any) => void | Promise<void>;
};

export type ActionType = {
    eventHandler: string;
    executable: ExecutableType[];       
}

export type MapActionType = MapType<AnyFunction>;
export type DataCortegeType = MapType<SimpleObjectType>;

export type ElListType = ELType[];

export type ActionsType = ActionType[];

export type ELType = {
    tag: string;
    children?: ElListType | ReactNode;
    value?: string;
    actions?: ActionsType;
    hidenSructure?: boolean;
    [key: string]: number | boolean | ElListType | ActionsType | ReactNode | StringAndListStringType;
};

export type StructureType = ELType | ElListType;

export type StructuresMapType = MapType<ELType>;

type ValueRoutePackType<W, T = W, B = W> = {
    workArea: W;
    topArea?: T;
    bottomArea?: B;
}

export type RoutePackValueType = ValueRoutePackType<StringAndListStringType>;
export type RouteStructurePackValueType = ValueRoutePackType<StructureType>;
export type RouteNodePackValueType = ValueRoutePackType<ReactNode>;

export type RouteStructurePackType = MapType<RouteStructurePackValueType>;

export type RoutePackType = MapType<RoutePackValueType>;

export type PartComponentProps = {
    structures: StructureType;
}

