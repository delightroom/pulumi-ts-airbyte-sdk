// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceKisi(args: GetSourceKisiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKisiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceKisi:getSourceKisi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceKisi.
 */
export interface GetSourceKisiArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceKisi.
 */
export interface GetSourceKisiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKisiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceKisiOutput(args: GetSourceKisiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKisiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceKisi:getSourceKisi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceKisi.
 */
export interface GetSourceKisiOutputArgs {
    sourceId: pulumi.Input<string>;
}
