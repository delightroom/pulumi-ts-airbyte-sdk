import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
