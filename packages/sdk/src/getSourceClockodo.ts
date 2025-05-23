// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceClockodo(args: GetSourceClockodoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClockodoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceClockodo:getSourceClockodo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceClockodo.
 */
export interface GetSourceClockodoArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceClockodo.
 */
export interface GetSourceClockodoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceClockodoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceClockodoOutput(args: GetSourceClockodoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClockodoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceClockodo:getSourceClockodo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceClockodo.
 */
export interface GetSourceClockodoOutputArgs {
    sourceId: pulumi.Input<string>;
}
