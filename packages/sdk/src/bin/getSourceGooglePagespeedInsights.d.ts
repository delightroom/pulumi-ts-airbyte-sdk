import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGooglePagespeedInsights(args: GetSourceGooglePagespeedInsightsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGooglePagespeedInsightsResult>;
/**
 * A collection of arguments for invoking getSourceGooglePagespeedInsights.
 */
export interface GetSourceGooglePagespeedInsightsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGooglePagespeedInsights.
 */
export interface GetSourceGooglePagespeedInsightsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGooglePagespeedInsightsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGooglePagespeedInsightsOutput(args: GetSourceGooglePagespeedInsightsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGooglePagespeedInsightsResult>;
/**
 * A collection of arguments for invoking getSourceGooglePagespeedInsights.
 */
export interface GetSourceGooglePagespeedInsightsOutputArgs {
    sourceId: pulumi.Input<string>;
}
