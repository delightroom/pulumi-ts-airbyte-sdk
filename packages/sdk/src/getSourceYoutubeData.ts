// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceYoutubeData(args: GetSourceYoutubeDataArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYoutubeDataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceYoutubeData:getSourceYoutubeData", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceYoutubeData.
 */
export interface GetSourceYoutubeDataArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceYoutubeData.
 */
export interface GetSourceYoutubeDataResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYoutubeDataResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceYoutubeDataOutput(args: GetSourceYoutubeDataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYoutubeDataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceYoutubeData:getSourceYoutubeData", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceYoutubeData.
 */
export interface GetSourceYoutubeDataOutputArgs {
    sourceId: pulumi.Input<string>;
}
