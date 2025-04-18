// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceZonkaFeedback(args: GetSourceZonkaFeedbackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZonkaFeedbackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZonkaFeedback:getSourceZonkaFeedback", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZonkaFeedback.
 */
export interface GetSourceZonkaFeedbackArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceZonkaFeedback.
 */
export interface GetSourceZonkaFeedbackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZonkaFeedbackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceZonkaFeedbackOutput(args: GetSourceZonkaFeedbackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZonkaFeedbackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZonkaFeedback:getSourceZonkaFeedback", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZonkaFeedback.
 */
export interface GetSourceZonkaFeedbackOutputArgs {
    sourceId: pulumi.Input<string>;
}
