// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceFleetio(args: GetSourceFleetioArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFleetioResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFleetio:getSourceFleetio", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFleetio.
 */
export interface GetSourceFleetioArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceFleetio.
 */
export interface GetSourceFleetioResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFleetioResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceFleetioOutput(args: GetSourceFleetioOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFleetioResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFleetio:getSourceFleetio", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFleetio.
 */
export interface GetSourceFleetioOutputArgs {
    sourceId: pulumi.Input<string>;
}
