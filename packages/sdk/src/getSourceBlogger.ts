// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceBlogger(args: GetSourceBloggerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBloggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBlogger:getSourceBlogger", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBlogger.
 */
export interface GetSourceBloggerArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBlogger.
 */
export interface GetSourceBloggerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBloggerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceBloggerOutput(args: GetSourceBloggerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBloggerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBlogger:getSourceBlogger", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBlogger.
 */
export interface GetSourceBloggerOutputArgs {
    sourceId: pulumi.Input<string>;
}
