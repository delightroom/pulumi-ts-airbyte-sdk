import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLinkedinAds(args: GetSourceLinkedinAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLinkedinAdsResult>;
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLinkedinAdsOutput(args: GetSourceLinkedinAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLinkedinAdsResult>;
/**
 * A collection of arguments for invoking getSourceLinkedinAds.
 */
export interface GetSourceLinkedinAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceLinkedinAds.d.ts.map