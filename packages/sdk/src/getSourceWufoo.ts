// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceWufoo(args: GetSourceWufooArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWufooResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWufoo:getSourceWufoo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWufoo.
 */
export interface GetSourceWufooArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceWufoo.
 */
export interface GetSourceWufooResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWufooResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceWufooOutput(args: GetSourceWufooOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWufooResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceWufoo:getSourceWufoo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWufoo.
 */
export interface GetSourceWufooOutputArgs {
    sourceId: pulumi.Input<string>;
}
