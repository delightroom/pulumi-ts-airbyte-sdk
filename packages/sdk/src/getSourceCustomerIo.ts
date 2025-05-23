// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceCustomerIo(args: GetSourceCustomerIoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCustomerIoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCustomerIo:getSourceCustomerIo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCustomerIo.
 */
export interface GetSourceCustomerIoArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceCustomerIo.
 */
export interface GetSourceCustomerIoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCustomerIoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceCustomerIoOutput(args: GetSourceCustomerIoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCustomerIoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCustomerIo:getSourceCustomerIo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCustomerIo.
 */
export interface GetSourceCustomerIoOutputArgs {
    sourceId: pulumi.Input<string>;
}
