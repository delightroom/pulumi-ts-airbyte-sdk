// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceRailz(args: GetSourceRailzArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRailzResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRailz:getSourceRailz", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceRailz.
 */
export interface GetSourceRailzArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceRailz.
 */
export interface GetSourceRailzResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRailzResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceRailzOutput(args: GetSourceRailzOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRailzResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRailz:getSourceRailz", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceRailz.
 */
export interface GetSourceRailzOutputArgs {
    sourceId: pulumi.Input<string>;
}
