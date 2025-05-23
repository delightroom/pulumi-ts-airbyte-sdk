// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceZohoCrm(args: GetSourceZohoCrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoCrmResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZohoCrm:getSourceZohoCrm", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZohoCrm.
 */
export interface GetSourceZohoCrmArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceZohoCrm.
 */
export interface GetSourceZohoCrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoCrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceZohoCrmOutput(args: GetSourceZohoCrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoCrmResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZohoCrm:getSourceZohoCrm", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZohoCrm.
 */
export interface GetSourceZohoCrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
