// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceHibob(args: GetSourceHibobArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHibobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHibob:getSourceHibob", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHibob.
 */
export interface GetSourceHibobArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceHibob.
 */
export interface GetSourceHibobResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHibobResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceHibobOutput(args: GetSourceHibobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHibobResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHibob:getSourceHibob", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHibob.
 */
export interface GetSourceHibobOutputArgs {
    sourceId: pulumi.Input<string>;
}
