// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceEncharge(args: GetSourceEnchargeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEnchargeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEncharge:getSourceEncharge", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceEncharge.
 */
export interface GetSourceEnchargeArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceEncharge.
 */
export interface GetSourceEnchargeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEnchargeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceEnchargeOutput(args: GetSourceEnchargeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEnchargeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEncharge:getSourceEncharge", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceEncharge.
 */
export interface GetSourceEnchargeOutputArgs {
    sourceId: pulumi.Input<string>;
}
