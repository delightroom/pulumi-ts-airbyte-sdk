// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceBigquery(args: GetSourceBigqueryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBigqueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBigquery:getSourceBigquery", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBigquery.
 */
export interface GetSourceBigqueryArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBigquery.
 */
export interface GetSourceBigqueryResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBigqueryResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceBigqueryOutput(args: GetSourceBigqueryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBigqueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBigquery:getSourceBigquery", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBigquery.
 */
export interface GetSourceBigqueryOutputArgs {
    sourceId: pulumi.Input<string>;
}
