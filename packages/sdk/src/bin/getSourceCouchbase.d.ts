import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCouchbase(args: GetSourceCouchbaseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCouchbaseResult>;
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
export declare function getSourceCouchbaseOutput(args: GetSourceCouchbaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCouchbaseResult>;
/**
 * A collection of arguments for invoking getSourceCouchbase.
 */
export interface GetSourceCouchbaseOutputArgs {
    sourceId: pulumi.Input<string>;
}
