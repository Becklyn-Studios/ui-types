import React from "react";

export const StringType = "string";
export const RteType = "rte";
export const AssetType = "asset";
export const LabeledLinkType = "labeledLink";

export interface RelationType {
    multiple: boolean;
    data: Record<string, DataType>;
}

export type DataType = "string" | "rte" | "asset" | "labeledLink" | RelationType;

export interface BaseComponentConfig {
    key: string;
    Component: React.FC;
    data?: Record<string, DataType>;
}
