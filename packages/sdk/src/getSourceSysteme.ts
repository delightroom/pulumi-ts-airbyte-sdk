// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSysteme(args: GetSourceSystemeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSystemeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSysteme:getSourceSysteme", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSysteme.
 */
export interface GetSourceSystemeArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSysteme.
 */
export interface GetSourceSystemeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSystemeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSystemeOutput(args: GetSourceSystemeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSystemeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSysteme:getSourceSysteme", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSysteme.
 */
export interface GetSourceSystemeOutputArgs {
    sourceId: pulumi.Input<string>;
}
