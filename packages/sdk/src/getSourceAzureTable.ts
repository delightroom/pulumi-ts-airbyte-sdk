// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceAzureTable(args: GetSourceAzureTableArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAzureTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAzureTable:getSourceAzureTable", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAzureTable.
 */
export interface GetSourceAzureTableArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceAzureTable.
 */
export interface GetSourceAzureTableResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAzureTableResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceAzureTableOutput(args: GetSourceAzureTableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAzureTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAzureTable:getSourceAzureTable", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAzureTable.
 */
export interface GetSourceAzureTableOutputArgs {
    sourceId: pulumi.Input<string>;
}
