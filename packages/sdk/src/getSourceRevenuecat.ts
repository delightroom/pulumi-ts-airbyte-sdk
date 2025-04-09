// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceRevenuecat(args: GetSourceRevenuecatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRevenuecatResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRevenuecat:getSourceRevenuecat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceRevenuecat.
 */
export interface GetSourceRevenuecatArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceRevenuecat.
 */
export interface GetSourceRevenuecatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRevenuecatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceRevenuecatOutput(args: GetSourceRevenuecatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRevenuecatResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRevenuecat:getSourceRevenuecat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceRevenuecat.
 */
export interface GetSourceRevenuecatOutputArgs {
    sourceId: pulumi.Input<string>;
}
