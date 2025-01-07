import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
