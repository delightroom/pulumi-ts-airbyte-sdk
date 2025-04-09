import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAppleSearchAds(args: GetSourceAppleSearchAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAppleSearchAdsResult>;
/**
 * A collection of arguments for invoking getSourceAppleSearchAds.
 */
export interface GetSourceAppleSearchAdsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAppleSearchAds.
 */
export interface GetSourceAppleSearchAdsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAppleSearchAdsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAppleSearchAdsOutput(args: GetSourceAppleSearchAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAppleSearchAdsResult>;
/**
 * A collection of arguments for invoking getSourceAppleSearchAds.
 */
export interface GetSourceAppleSearchAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
