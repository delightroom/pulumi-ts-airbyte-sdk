// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceMicrosoftDataverse(args: GetSourceMicrosoftDataverseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMicrosoftDataverseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMicrosoftDataverse:getSourceMicrosoftDataverse", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMicrosoftDataverse.
 */
export interface GetSourceMicrosoftDataverseArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceMicrosoftDataverse.
 */
export interface GetSourceMicrosoftDataverseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMicrosoftDataverseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceMicrosoftDataverseOutput(args: GetSourceMicrosoftDataverseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMicrosoftDataverseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMicrosoftDataverse:getSourceMicrosoftDataverse", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMicrosoftDataverse.
 */
export interface GetSourceMicrosoftDataverseOutputArgs {
    sourceId: pulumi.Input<string>;
}
