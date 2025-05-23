// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceTavus(args: GetSourceTavusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTavusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTavus:getSourceTavus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTavus.
 */
export interface GetSourceTavusArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceTavus.
 */
export interface GetSourceTavusResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTavusResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceTavusOutput(args: GetSourceTavusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTavusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTavus:getSourceTavus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTavus.
 */
export interface GetSourceTavusOutputArgs {
    sourceId: pulumi.Input<string>;
}
