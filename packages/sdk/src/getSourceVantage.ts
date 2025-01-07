// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceVantage(args: GetSourceVantageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceVantageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceVantage:getSourceVantage", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceVantage.
 */
export interface GetSourceVantageArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceVantage.
 */
export interface GetSourceVantageResult {
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
export function getSourceVantageOutput(args: GetSourceVantageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceVantageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceVantage:getSourceVantage", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceVantage.
 */
export interface GetSourceVantageOutputArgs {
    sourceId: pulumi.Input<string>;
}
