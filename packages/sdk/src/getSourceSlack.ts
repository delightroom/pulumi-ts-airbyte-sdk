// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSlack(args: GetSourceSlackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSlackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSlack:getSourceSlack", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSlack.
 */
export interface GetSourceSlackArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSlack.
 */
export interface GetSourceSlackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSlackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSlackOutput(args: GetSourceSlackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSlackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSlack:getSourceSlack", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSlack.
 */
export interface GetSourceSlackOutputArgs {
    sourceId: pulumi.Input<string>;
}
