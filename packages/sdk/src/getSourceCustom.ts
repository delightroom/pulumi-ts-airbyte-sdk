// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceCustom(args: GetSourceCustomArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCustomResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCustom:getSourceCustom", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCustom.
 */
export interface GetSourceCustomArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceCustom.
 */
export interface GetSourceCustomResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCustomResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceCustomOutput(args: GetSourceCustomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCustomResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCustom:getSourceCustom", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCustom.
 */
export interface GetSourceCustomOutputArgs {
    sourceId: pulumi.Input<string>;
}
