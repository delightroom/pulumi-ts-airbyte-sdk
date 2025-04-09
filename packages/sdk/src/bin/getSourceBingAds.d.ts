import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBingAds(args: GetSourceBingAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBingAdsResult>;
/**
 * A collection of arguments for invoking getSourceBingAds.
 */
export interface GetSourceBingAdsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBingAds.
 */
export interface GetSourceBingAdsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBingAdsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBingAdsOutput(args: GetSourceBingAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBingAdsResult>;
/**
 * A collection of arguments for invoking getSourceBingAds.
 */
export interface GetSourceBingAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
