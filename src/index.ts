import React from "react";

export const TYPE_STRING = "string";
export const TYPE_BOOL = "bool";
export const TYPE_NUMBER = "number";
export const TYPE_RTE = "rte";
export const TYPE_ASSET = "asset";
export const TYPE_LABELED_LINK = "labeledLink";
export const TYPE_CONTENT_MODEL = "contentModel";

export type ComponentDataConfig = Record<string, DataType>;

export interface SingleRelationType {
    multiple: false;
    data?: string[] | ComponentDataConfig;
}

export interface ArrayRelationType {
    multiple: true;
    data?: string[] | "string" | "asset" | "labeledLink" | ComponentDataConfig;
}

export type RelationType = SingleRelationType | ArrayRelationType;

export type DataType =
    | "string"
    | "bool"
    | "number"
    | "rte"
    | "asset"
    | "labeledLink"
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
}

export interface RteData {
    json: Document;
    references: ReferencesData;
}

export type ReferencesData = Record<string, Asset | LinkReference>;
