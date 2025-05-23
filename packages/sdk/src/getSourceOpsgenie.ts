// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceOpsgenie(args: GetSourceOpsgenieArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpsgenieResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceOpsgenie:getSourceOpsgenie", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceOpsgenie.
 */
export interface GetSourceOpsgenieArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceOpsgenie.
 */
export interface GetSourceOpsgenieResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpsgenieResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceOpsgenieOutput(args: GetSourceOpsgenieOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpsgenieResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceOpsgenie:getSourceOpsgenie", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceOpsgenie.
 */
export interface GetSourceOpsgenieOutputArgs {
    sourceId: pulumi.Input<string>;
}
