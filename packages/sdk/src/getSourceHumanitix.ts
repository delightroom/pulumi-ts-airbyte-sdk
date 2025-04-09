// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceHumanitix(args: GetSourceHumanitixArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHumanitixResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHumanitix:getSourceHumanitix", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHumanitix.
 */
export interface GetSourceHumanitixArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceHumanitix.
 */
export interface GetSourceHumanitixResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHumanitixResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceHumanitixOutput(args: GetSourceHumanitixOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHumanitixResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHumanitix:getSourceHumanitix", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHumanitix.
 */
export interface GetSourceHumanitixOutputArgs {
    sourceId: pulumi.Input<string>;
}
