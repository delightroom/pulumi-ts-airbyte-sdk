import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAmazonAds(args: GetSourceAmazonAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAmazonAdsResult>;
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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAmazonAdsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAmazonAdsOutput(args: GetSourceAmazonAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAmazonAdsResult>;
/**
 * A collection of arguments for invoking getSourceAmazonAds.
 */
export interface GetSourceAmazonAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
