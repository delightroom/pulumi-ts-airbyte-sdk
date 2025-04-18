// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourcePaystack(args: GetSourcePaystackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePaystackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePaystack:getSourcePaystack", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePaystack.
 */
export interface GetSourcePaystackArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourcePaystack.
 */
export interface GetSourcePaystackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePaystackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourcePaystackOutput(args: GetSourcePaystackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePaystackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePaystack:getSourcePaystack", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePaystack.
 */
export interface GetSourcePaystackOutputArgs {
    sourceId: pulumi.Input<string>;
}
