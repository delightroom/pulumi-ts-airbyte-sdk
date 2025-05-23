// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceFinancialModelling(args: GetSourceFinancialModellingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFinancialModellingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFinancialModelling:getSourceFinancialModelling", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFinancialModelling.
 */
export interface GetSourceFinancialModellingArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceFinancialModelling.
 */
export interface GetSourceFinancialModellingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFinancialModellingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceFinancialModellingOutput(args: GetSourceFinancialModellingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFinancialModellingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFinancialModelling:getSourceFinancialModelling", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFinancialModelling.
 */
export interface GetSourceFinancialModellingOutputArgs {
    sourceId: pulumi.Input<string>;
}
