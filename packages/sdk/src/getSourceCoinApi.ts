// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceCoinApi(args: GetSourceCoinApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCoinApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCoinApi:getSourceCoinApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCoinApi.
 */
export interface GetSourceCoinApiArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceCoinApi.
 */
export interface GetSourceCoinApiResult {
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
export function getSourceCoinApiOutput(args: GetSourceCoinApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCoinApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCoinApi:getSourceCoinApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCoinApi.
 */
export interface GetSourceCoinApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
