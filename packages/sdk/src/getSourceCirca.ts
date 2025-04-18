// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceCirca(args: GetSourceCircaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCircaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCirca:getSourceCirca", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCirca.
 */
export interface GetSourceCircaArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceCirca.
 */
export interface GetSourceCircaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCircaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceCircaOutput(args: GetSourceCircaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCircaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCirca:getSourceCirca", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCirca.
 */
export interface GetSourceCircaOutputArgs {
    sourceId: pulumi.Input<string>;
}
