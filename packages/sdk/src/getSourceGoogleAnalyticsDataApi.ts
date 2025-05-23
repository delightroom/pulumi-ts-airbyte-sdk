// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceGoogleAnalyticsDataApi(args: GetSourceGoogleAnalyticsDataApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleAnalyticsDataApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGoogleAnalyticsDataApi:getSourceGoogleAnalyticsDataApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleAnalyticsDataApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceGoogleAnalyticsDataApiOutput(args: GetSourceGoogleAnalyticsDataApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleAnalyticsDataApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGoogleAnalyticsDataApi:getSourceGoogleAnalyticsDataApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGoogleAnalyticsDataApi.
 */
export interface GetSourceGoogleAnalyticsDataApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
