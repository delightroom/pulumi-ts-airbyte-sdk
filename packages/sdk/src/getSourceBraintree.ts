// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceBraintree(args: GetSourceBraintreeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBraintreeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBraintree:getSourceBraintree", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBraintree.
 */
export interface GetSourceBraintreeArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBraintree.
 */
export interface GetSourceBraintreeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBraintreeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceBraintreeOutput(args: GetSourceBraintreeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBraintreeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBraintree:getSourceBraintree", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBraintree.
 */
export interface GetSourceBraintreeOutputArgs {
    sourceId: pulumi.Input<string>;
}
