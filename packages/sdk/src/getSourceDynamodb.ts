// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceDynamodb(args: GetSourceDynamodbArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDynamodbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceDynamodb:getSourceDynamodb", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDynamodb.
 */
export interface GetSourceDynamodbArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceDynamodb.
 */
export interface GetSourceDynamodbResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDynamodbResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceDynamodbOutput(args: GetSourceDynamodbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDynamodbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceDynamodb:getSourceDynamodb", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDynamodb.
 */
export interface GetSourceDynamodbOutputArgs {
    sourceId: pulumi.Input<string>;
}
