// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSigmaComputing(args: GetSourceSigmaComputingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSigmaComputingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSigmaComputing:getSourceSigmaComputing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSigmaComputing.
 */
export interface GetSourceSigmaComputingArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSigmaComputing.
 */
export interface GetSourceSigmaComputingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSigmaComputingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSigmaComputingOutput(args: GetSourceSigmaComputingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSigmaComputingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSigmaComputing:getSourceSigmaComputing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSigmaComputing.
 */
export interface GetSourceSigmaComputingOutputArgs {
    sourceId: pulumi.Input<string>;
}
