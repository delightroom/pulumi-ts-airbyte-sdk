// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceJobnimbus(args: GetSourceJobnimbusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJobnimbusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceJobnimbus:getSourceJobnimbus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceJobnimbus.
 */
export interface GetSourceJobnimbusArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceJobnimbus.
 */
export interface GetSourceJobnimbusResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceJobnimbusResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceJobnimbusOutput(args: GetSourceJobnimbusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJobnimbusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceJobnimbus:getSourceJobnimbus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceJobnimbus.
 */
export interface GetSourceJobnimbusOutputArgs {
    sourceId: pulumi.Input<string>;
}
