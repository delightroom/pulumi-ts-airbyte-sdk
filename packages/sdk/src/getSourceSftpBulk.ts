// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSftpBulk(args: GetSourceSftpBulkArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSftpBulkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSftpBulk:getSourceSftpBulk", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSftpBulk.
 */
export interface GetSourceSftpBulkArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSftpBulk.
 */
export interface GetSourceSftpBulkResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSftpBulkResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSftpBulkOutput(args: GetSourceSftpBulkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSftpBulkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSftpBulk:getSourceSftpBulk", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSftpBulk.
 */
export interface GetSourceSftpBulkOutputArgs {
    sourceId: pulumi.Input<string>;
}
