// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceHuggingFaceDatasets(args: GetSourceHuggingFaceDatasetsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHuggingFaceDatasetsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHuggingFaceDatasets:getSourceHuggingFaceDatasets", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHuggingFaceDatasets.
 */
export interface GetSourceHuggingFaceDatasetsArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceHuggingFaceDatasets.
 */
export interface GetSourceHuggingFaceDatasetsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHuggingFaceDatasetsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceHuggingFaceDatasetsOutput(args: GetSourceHuggingFaceDatasetsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHuggingFaceDatasetsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHuggingFaceDatasets:getSourceHuggingFaceDatasets", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHuggingFaceDatasets.
 */
export interface GetSourceHuggingFaceDatasetsOutputArgs {
    sourceId: pulumi.Input<string>;
}
