import React from "react";

export const TYPE_STRING = "string";
export const TYPE_BOOL = "bool";
export const TYPE_NUMBER = "number";
export const TYPE_RTE = "rte";
export const TYPE_ASSET = "asset";
export const TYPE_LABELED_LINK = "labeledLink";

export interface RelationType {
    multiple: boolean;
    data?: Record<string, DataType>;
}

export type DataType =
    | "string"
    | "bool"
    | "number"
    | "rte"
    | "asset"
    | "labeledLink"
    | RelationType;

export interface BaseComponentConfig<T> {
    key: string;
    Component: React.FC<T>;
    data?: Record<string, DataType>;
}
