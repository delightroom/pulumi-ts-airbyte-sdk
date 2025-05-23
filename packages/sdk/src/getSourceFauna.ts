// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceFauna(args: GetSourceFaunaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFaunaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFauna:getSourceFauna", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFauna.
 */
export interface GetSourceFaunaArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceFauna.
 */
export interface GetSourceFaunaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFaunaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceFaunaOutput(args: GetSourceFaunaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFaunaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFauna:getSourceFauna", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFauna.
 */
export interface GetSourceFaunaOutputArgs {
    sourceId: pulumi.Input<string>;
}
