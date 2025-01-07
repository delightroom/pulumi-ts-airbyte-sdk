// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceGainsightPx(args: GetSourceGainsightPxArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGainsightPxResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGainsightPx:getSourceGainsightPx", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGainsightPx.
 */
export interface GetSourceGainsightPxArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGainsightPx.
 */
export interface GetSourceGainsightPxResult {
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
export function getSourceGainsightPxOutput(args: GetSourceGainsightPxOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGainsightPxResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGainsightPx:getSourceGainsightPx", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGainsightPx.
 */
export interface GetSourceGainsightPxOutputArgs {
    sourceId: pulumi.Input<string>;
}
