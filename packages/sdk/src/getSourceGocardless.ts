// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceGocardless(args: GetSourceGocardlessArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGocardlessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGocardless:getSourceGocardless", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGocardless.
 */
export interface GetSourceGocardlessArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGocardless.
 */
export interface GetSourceGocardlessResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGocardlessResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceGocardlessOutput(args: GetSourceGocardlessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGocardlessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGocardless:getSourceGocardless", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGocardless.
 */
export interface GetSourceGocardlessOutputArgs {
    sourceId: pulumi.Input<string>;
}
