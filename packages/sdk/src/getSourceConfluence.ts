// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceConfluence(args: GetSourceConfluenceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConfluenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceConfluence:getSourceConfluence", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceConfluence.
 */
export interface GetSourceConfluenceArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceConfluence.
 */
export interface GetSourceConfluenceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceConfluenceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceConfluenceOutput(args: GetSourceConfluenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConfluenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceConfluence:getSourceConfluence", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceConfluence.
 */
export interface GetSourceConfluenceOutputArgs {
    sourceId: pulumi.Input<string>;
}
