import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMercadoAds(args: GetSourceMercadoAdsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMercadoAdsResult>;
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
export declare function getSourceMercadoAdsOutput(args: GetSourceMercadoAdsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMercadoAdsResult>;
/**
 * A collection of arguments for invoking getSourceMercadoAds.
 */
export interface GetSourceMercadoAdsOutputArgs {
    sourceId: pulumi.Input<string>;
}
