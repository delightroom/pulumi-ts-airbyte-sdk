// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourcePingdom(args: GetSourcePingdomArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePingdomResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePingdom:getSourcePingdom", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePingdom.
 */
export interface GetSourcePingdomArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourcePingdom.
 */
export interface GetSourcePingdomResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePingdomResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourcePingdomOutput(args: GetSourcePingdomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePingdomResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePingdom:getSourcePingdom", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePingdom.
 */
export interface GetSourcePingdomOutputArgs {
    sourceId: pulumi.Input<string>;
}
