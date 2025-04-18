// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceLinkedinPages(args: GetSourceLinkedinPagesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLinkedinPagesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceLinkedinPages:getSourceLinkedinPages", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceLinkedinPages.
 */
export interface GetSourceLinkedinPagesArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceLinkedinPages.
 */
export interface GetSourceLinkedinPagesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLinkedinPagesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceLinkedinPagesOutput(args: GetSourceLinkedinPagesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLinkedinPagesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceLinkedinPages:getSourceLinkedinPages", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceLinkedinPages.
 */
export interface GetSourceLinkedinPagesOutputArgs {
    sourceId: pulumi.Input<string>;
}
