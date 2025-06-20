// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceMercadoAds(args: GetSourceMercadoAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMercadoAdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMercadoAds:getSourceMercadoAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMercadoAds.
 */
export interface GetSourceMercadoAdsArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceMercadoAds.
 */
export interface GetSourceMercadoAdsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMercadoAdsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceMercadoAdsOutput(args: GetSourceMercadoAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMercadoAdsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMercadoAds:getSourceMercadoAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMercadoAds.
 */
export interface GetSourceMercadoAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
