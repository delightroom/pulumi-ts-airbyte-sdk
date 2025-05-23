// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceZapsign(args: GetSourceZapsignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZapsignResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZapsign:getSourceZapsign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZapsign.
 */
export interface GetSourceZapsignArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceZapsign.
 */
export interface GetSourceZapsignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZapsignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceZapsignOutput(args: GetSourceZapsignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZapsignResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZapsign:getSourceZapsign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZapsign.
 */
export interface GetSourceZapsignOutputArgs {
    sourceId: pulumi.Input<string>;
}
