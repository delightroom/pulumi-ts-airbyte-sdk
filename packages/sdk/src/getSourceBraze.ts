// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceBraze(args: GetSourceBrazeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBrazeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBraze:getSourceBraze", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBraze.
 */
export interface GetSourceBrazeArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBraze.
 */
export interface GetSourceBrazeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBrazeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceBrazeOutput(args: GetSourceBrazeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBrazeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBraze:getSourceBraze", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBraze.
 */
export interface GetSourceBrazeOutputArgs {
    sourceId: pulumi.Input<string>;
}
