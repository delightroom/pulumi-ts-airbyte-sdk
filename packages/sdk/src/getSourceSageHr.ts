// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSageHr(args: GetSourceSageHrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSageHrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSageHr:getSourceSageHr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSageHr.
 */
export interface GetSourceSageHrArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSageHr.
 */
export interface GetSourceSageHrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSageHrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSageHrOutput(args: GetSourceSageHrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSageHrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSageHr:getSourceSageHr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSageHr.
 */
export interface GetSourceSageHrOutputArgs {
    sourceId: pulumi.Input<string>;
}
