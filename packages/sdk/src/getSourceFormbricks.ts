// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceFormbricks(args: GetSourceFormbricksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFormbricksResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFormbricks:getSourceFormbricks", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFormbricks.
 */
export interface GetSourceFormbricksArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceFormbricks.
 */
export interface GetSourceFormbricksResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFormbricksResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceFormbricksOutput(args: GetSourceFormbricksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFormbricksResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFormbricks:getSourceFormbricks", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFormbricks.
 */
export interface GetSourceFormbricksOutputArgs {
    sourceId: pulumi.Input<string>;
}
