// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceWordpress(args: GetSourceWordpressArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWordpressResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWordpress:getSourceWordpress", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWordpress.
 */
export interface GetSourceWordpressArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceWordpress.
 */
export interface GetSourceWordpressResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWordpressResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceWordpressOutput(args: GetSourceWordpressOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWordpressResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceWordpress:getSourceWordpress", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWordpress.
 */
export interface GetSourceWordpressOutputArgs {
    sourceId: pulumi.Input<string>;
}
