import React from "react";

export const TYPE_STRING = "string";
export const TYPE_BOOL = "bool";
export const TYPE_NUMBER = "number";
export const TYPE_RTE = "rte";
export const TYPE_ASSET = "asset";
export const TYPE_HEADLINE = "headline";
export const TYPE_LABELED_LINK = "labeledLink";

export type ComponentDataConfig = Record<string, DataType>;

export interface SingleRelationType {
    multiple: false;
    data?: string[] | BaseComponentConfig<any>;
}

export interface ArrayRelationType {
    multiple: true;
    data?: string[] | "string" | "asset" | "labeledLink" | BaseComponentConfig<any>;
}

export type RelationType = SingleRelationType | ArrayRelationType;

export type DataType =
    | "string"
    | "bool"
    | "number"
    | "rte"
    | "asset"
    | "headline"
    | "labeledLink"
    | RelationType
    | string;

export interface BaseComponentConfig<T> {
    key: string;
    Component: React.FC<T>;
    data?: ComponentDataConfig;
}

export interface Asset {
    contentType: string;
    title: string;
    url: string;
    width?: number;
    height?: number;
}

export interface LabeledLink {
    label?: string | null;
    reference?: LinkReference | null;
}

export interface LinkReference {
    url: string;
    inNewTab?: boolean;
    title?: string | null;
}

export interface MetaData {
    title?: string | null;
    description?: string | null;
    keywords?: string[];
    no_index?: boolean | null;
    no_follow?: boolean | null;
}
