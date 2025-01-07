import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
