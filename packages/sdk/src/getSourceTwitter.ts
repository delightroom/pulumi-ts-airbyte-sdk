// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceTwitter(args: GetSourceTwitterArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTwitterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTwitter:getSourceTwitter", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTwitter.
 */
export interface GetSourceTwitterArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceTwitter.
 */
export interface GetSourceTwitterResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTwitterResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceTwitterOutput(args: GetSourceTwitterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTwitterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTwitter:getSourceTwitter", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTwitter.
 */
export interface GetSourceTwitterOutputArgs {
    sourceId: pulumi.Input<string>;
}
