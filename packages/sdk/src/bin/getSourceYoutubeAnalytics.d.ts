import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceYoutubeAnalytics(args: GetSourceYoutubeAnalyticsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYoutubeAnalyticsResult>;
/**
 * A collection of arguments for invoking getSourceYoutubeAnalytics.
 */
export interface GetSourceYoutubeAnalyticsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYoutubeAnalytics.
 */
export interface GetSourceYoutubeAnalyticsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYoutubeAnalyticsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceYoutubeAnalyticsOutput(args: GetSourceYoutubeAnalyticsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYoutubeAnalyticsResult>;
/**
 * A collection of arguments for invoking getSourceYoutubeAnalytics.
 */
export interface GetSourceYoutubeAnalyticsOutputArgs {
    sourceId: pulumi.Input<string>;
}
