// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceOncehub(args: GetSourceOncehubArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOncehubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceOncehub:getSourceOncehub", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceOncehub.
 */
export interface GetSourceOncehubArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceOncehub.
 */
export interface GetSourceOncehubResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOncehubResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceOncehubOutput(args: GetSourceOncehubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOncehubResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceOncehub:getSourceOncehub", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceOncehub.
 */
export interface GetSourceOncehubOutputArgs {
    sourceId: pulumi.Input<string>;
}
