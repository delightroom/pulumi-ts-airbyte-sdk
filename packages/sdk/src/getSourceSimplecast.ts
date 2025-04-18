// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSimplecast(args: GetSourceSimplecastArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSimplecastResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSimplecast:getSourceSimplecast", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSimplecast.
 */
export interface GetSourceSimplecastArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSimplecast.
 */
export interface GetSourceSimplecastResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSimplecastResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSimplecastOutput(args: GetSourceSimplecastOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSimplecastResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSimplecast:getSourceSimplecast", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSimplecast.
 */
export interface GetSourceSimplecastOutputArgs {
    sourceId: pulumi.Input<string>;
}
