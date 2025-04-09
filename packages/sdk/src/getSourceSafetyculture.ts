// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSafetyculture(args: GetSourceSafetycultureArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSafetycultureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSafetyculture:getSourceSafetyculture", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSafetyculture.
 */
export interface GetSourceSafetycultureArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSafetyculture.
 */
export interface GetSourceSafetycultureResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSafetycultureResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSafetycultureOutput(args: GetSourceSafetycultureOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSafetycultureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSafetyculture:getSourceSafetyculture", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSafetyculture.
 */
export interface GetSourceSafetycultureOutputArgs {
    sourceId: pulumi.Input<string>;
}
