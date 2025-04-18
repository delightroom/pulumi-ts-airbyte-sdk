// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceCouchbase(args: GetSourceCouchbaseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCouchbaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCouchbase:getSourceCouchbase", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCouchbase.
 */
export interface GetSourceCouchbaseArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceCouchbase.
 */
export interface GetSourceCouchbaseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCouchbaseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceCouchbaseOutput(args: GetSourceCouchbaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCouchbaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCouchbase:getSourceCouchbase", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCouchbase.
 */
export interface GetSourceCouchbaseOutputArgs {
    sourceId: pulumi.Input<string>;
}
