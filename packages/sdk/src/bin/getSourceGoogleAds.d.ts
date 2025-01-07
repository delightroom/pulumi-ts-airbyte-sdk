import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGoogleAds(args: GetSourceGoogleAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleAdsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleAds.
 */
export interface GetSourceGoogleAdsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleAds.
 */
export interface GetSourceGoogleAdsResult {
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
export declare function getSourceGoogleAdsOutput(args: GetSourceGoogleAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleAdsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleAds.
 */
export interface GetSourceGoogleAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
