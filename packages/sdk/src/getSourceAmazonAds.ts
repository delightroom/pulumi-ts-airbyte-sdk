// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceAmazonAds(args: GetSourceAmazonAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAmazonAdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAmazonAds:getSourceAmazonAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAmazonAds.
 */
export interface GetSourceAmazonAdsArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceAmazonAds.
 */
export interface GetSourceAmazonAdsResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceAmazonAdsOutput(args: GetSourceAmazonAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAmazonAdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAmazonAds:getSourceAmazonAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAmazonAds.
 */
export interface GetSourceAmazonAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
