// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceEventzilla(args: GetSourceEventzillaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEventzillaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEventzilla:getSourceEventzilla", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceEventzilla.
 */
export interface GetSourceEventzillaArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceEventzilla.
 */
export interface GetSourceEventzillaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEventzillaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceEventzillaOutput(args: GetSourceEventzillaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEventzillaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEventzilla:getSourceEventzilla", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceEventzilla.
 */
export interface GetSourceEventzillaOutputArgs {
    sourceId: pulumi.Input<string>;
}
