// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceBasecamp(args: GetSourceBasecampArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBasecampResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBasecamp:getSourceBasecamp", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBasecamp.
 */
export interface GetSourceBasecampArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBasecamp.
 */
export interface GetSourceBasecampResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBasecampResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceBasecampOutput(args: GetSourceBasecampOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBasecampResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBasecamp:getSourceBasecamp", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBasecamp.
 */
export interface GetSourceBasecampOutputArgs {
    sourceId: pulumi.Input<string>;
}
