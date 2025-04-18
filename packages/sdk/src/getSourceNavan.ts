// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceNavan(args: GetSourceNavanArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNavanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceNavan:getSourceNavan", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceNavan.
 */
export interface GetSourceNavanArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceNavan.
 */
export interface GetSourceNavanResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNavanResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceNavanOutput(args: GetSourceNavanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNavanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceNavan:getSourceNavan", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceNavan.
 */
export interface GetSourceNavanOutputArgs {
    sourceId: pulumi.Input<string>;
}
