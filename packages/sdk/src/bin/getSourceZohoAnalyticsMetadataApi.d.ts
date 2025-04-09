import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoAnalyticsMetadataApi(args: GetSourceZohoAnalyticsMetadataApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoAnalyticsMetadataApiResult>;
/**
 * A collection of arguments for invoking getSourceZohoAnalyticsMetadataApi.
 */
export interface GetSourceZohoAnalyticsMetadataApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoAnalyticsMetadataApi.
 */
export interface GetSourceZohoAnalyticsMetadataApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoAnalyticsMetadataApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoAnalyticsMetadataApiOutput(args: GetSourceZohoAnalyticsMetadataApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoAnalyticsMetadataApiResult>;
/**
 * A collection of arguments for invoking getSourceZohoAnalyticsMetadataApi.
 */
export interface GetSourceZohoAnalyticsMetadataApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
