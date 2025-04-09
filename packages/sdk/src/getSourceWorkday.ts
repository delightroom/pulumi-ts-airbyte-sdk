// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceWorkday(args: GetSourceWorkdayArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWorkdayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWorkday:getSourceWorkday", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWorkday.
 */
export interface GetSourceWorkdayArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceWorkday.
 */
export interface GetSourceWorkdayResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWorkdayResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceWorkdayOutput(args: GetSourceWorkdayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWorkdayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceWorkday:getSourceWorkday", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWorkday.
 */
export interface GetSourceWorkdayOutputArgs {
    sourceId: pulumi.Input<string>;
}
