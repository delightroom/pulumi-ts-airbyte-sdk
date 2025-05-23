// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSmaily(args: GetSourceSmailyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSmailyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSmaily:getSourceSmaily", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSmaily.
 */
export interface GetSourceSmailyArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSmaily.
 */
export interface GetSourceSmailyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSmailyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSmailyOutput(args: GetSourceSmailyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSmailyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSmaily:getSourceSmaily", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSmaily.
 */
export interface GetSourceSmailyOutputArgs {
    sourceId: pulumi.Input<string>;
}
