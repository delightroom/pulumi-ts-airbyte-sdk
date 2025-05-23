// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceTickettailor(args: GetSourceTickettailorArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTickettailorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTickettailor:getSourceTickettailor", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTickettailor.
 */
export interface GetSourceTickettailorArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceTickettailor.
 */
export interface GetSourceTickettailorResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTickettailorResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceTickettailorOutput(args: GetSourceTickettailorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTickettailorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTickettailor:getSourceTickettailor", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTickettailor.
 */
export interface GetSourceTickettailorOutputArgs {
    sourceId: pulumi.Input<string>;
}
