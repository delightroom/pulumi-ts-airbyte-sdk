// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceBugsnag(args: GetSourceBugsnagArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBugsnagResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBugsnag:getSourceBugsnag", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBugsnag.
 */
export interface GetSourceBugsnagArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBugsnag.
 */
export interface GetSourceBugsnagResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBugsnagResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceBugsnagOutput(args: GetSourceBugsnagOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBugsnagResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBugsnag:getSourceBugsnag", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBugsnag.
 */
export interface GetSourceBugsnagOutputArgs {
    sourceId: pulumi.Input<string>;
}
