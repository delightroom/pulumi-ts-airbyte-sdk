// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceLeverHiring(args: GetSourceLeverHiringArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLeverHiringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceLeverHiring:getSourceLeverHiring", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceLeverHiring.
 */
export interface GetSourceLeverHiringArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceLeverHiring.
 */
export interface GetSourceLeverHiringResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLeverHiringResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceLeverHiringOutput(args: GetSourceLeverHiringOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLeverHiringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceLeverHiring:getSourceLeverHiring", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceLeverHiring.
 */
export interface GetSourceLeverHiringOutputArgs {
    sourceId: pulumi.Input<string>;
}
