// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceHarness(args: GetSourceHarnessArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHarnessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHarness:getSourceHarness", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHarness.
 */
export interface GetSourceHarnessArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceHarness.
 */
export interface GetSourceHarnessResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHarnessResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceHarnessOutput(args: GetSourceHarnessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHarnessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHarness:getSourceHarness", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHarness.
 */
export interface GetSourceHarnessOutputArgs {
    sourceId: pulumi.Input<string>;
}
