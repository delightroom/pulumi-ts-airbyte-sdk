import * as pulumi from "@pulumi/pulumi";
export declare function getSourceGoogleAnalyticsDataApi(args: GetSourceGoogleAnalyticsDataApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleAnalyticsDataApiResult>;
/**
 * A collection of arguments for invoking getSourceGoogleAnalyticsDataApi.
 */
export interface GetSourceGoogleAnalyticsDataApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleAnalyticsDataApi.
 */
export interface GetSourceGoogleAnalyticsDataApiResult {
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
export declare function getSourceGoogleAnalyticsDataApiOutput(args: GetSourceGoogleAnalyticsDataApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleAnalyticsDataApiResult>;
/**
 * A collection of arguments for invoking getSourceGoogleAnalyticsDataApi.
 */
export interface GetSourceGoogleAnalyticsDataApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceGoogleAnalyticsDataApi.d.ts.map