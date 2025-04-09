// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceBrex(args: GetSourceBrexArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBrexResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBrex:getSourceBrex", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBrex.
 */
export interface GetSourceBrexArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBrex.
 */
export interface GetSourceBrexResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBrexResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceBrexOutput(args: GetSourceBrexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBrexResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBrex:getSourceBrex", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBrex.
 */
export interface GetSourceBrexOutputArgs {
    sourceId: pulumi.Input<string>;
}
