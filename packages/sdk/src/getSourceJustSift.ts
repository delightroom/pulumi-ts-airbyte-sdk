// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceJustSift(args: GetSourceJustSiftArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJustSiftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceJustSift:getSourceJustSift", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceJustSift.
 */
export interface GetSourceJustSiftArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceJustSift.
 */
export interface GetSourceJustSiftResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceJustSiftResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceJustSiftOutput(args: GetSourceJustSiftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJustSiftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceJustSift:getSourceJustSift", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceJustSift.
 */
export interface GetSourceJustSiftOutputArgs {
    sourceId: pulumi.Input<string>;
}
