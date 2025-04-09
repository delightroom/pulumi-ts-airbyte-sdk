// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceLinkedinAds(args: GetSourceLinkedinAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLinkedinAdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceLinkedinAds:getSourceLinkedinAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceLinkedinAds.
 */
export interface GetSourceLinkedinAdsArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceLinkedinAds.
 */
export interface GetSourceLinkedinAdsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLinkedinAdsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceLinkedinAdsOutput(args: GetSourceLinkedinAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLinkedinAdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceLinkedinAds:getSourceLinkedinAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceLinkedinAds.
 */
export interface GetSourceLinkedinAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
