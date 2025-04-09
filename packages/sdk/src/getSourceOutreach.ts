// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceOutreach(args: GetSourceOutreachArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOutreachResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceOutreach:getSourceOutreach", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceOutreach.
 */
export interface GetSourceOutreachArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceOutreach.
 */
export interface GetSourceOutreachResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOutreachResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceOutreachOutput(args: GetSourceOutreachOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOutreachResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceOutreach:getSourceOutreach", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceOutreach.
 */
export interface GetSourceOutreachOutputArgs {
    sourceId: pulumi.Input<string>;
}
