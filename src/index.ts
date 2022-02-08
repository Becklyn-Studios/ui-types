import React from "react";

export const TYPE_STRING = "string";
export const TYPE_BOOL = "bool";
export const TYPE_NUMBER = "number";
export const TYPE_RTE = "rte";
export const TYPE_ASSET = "asset";
export const TYPE_REFERENCE = "reference";
export const TYPE_LABELED_LINK = "labeledLink";
export const TYPE_CONTENT_MODEL = "contentModel";

export type ComponentDataConfig = Record<string, DataType>;

export interface RelationType {
    multiple: boolean;
    data?:
        | "string"
        | "asset"
        | "reference"
        | "labeledLink"
        | ComponentDataConfig
        | (ComponentDataConfig | undefined)[];
}

export type DataType =
    | "string"
    | "bool"
    | "number"
    | "rte"
    | "asset"
    | "labeledLink"
    | "reference"
    | "contentModel"
    | RelationType;

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
    label?: string | null;
}
