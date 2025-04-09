// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSalesloft(args: GetSourceSalesloftArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSalesloftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSalesloft:getSourceSalesloft", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSalesloft.
 */
export interface GetSourceSalesloftArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSalesloft.
 */
export interface GetSourceSalesloftResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSalesloftResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSalesloftOutput(args: GetSourceSalesloftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSalesloftResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSalesloft:getSourceSalesloft", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSalesloft.
 */
export interface GetSourceSalesloftOutputArgs {
    sourceId: pulumi.Input<string>;
}
