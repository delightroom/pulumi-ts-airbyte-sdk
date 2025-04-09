import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTmdb(args: GetSourceTmdbArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTmdbResult>;
/**
 * A collection of arguments for invoking getSourceTmdb.
 */
export interface GetSourceTmdbArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTmdb.
 */
export interface GetSourceTmdbResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTmdbResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTmdbOutput(args: GetSourceTmdbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTmdbResult>;
/**
 * A collection of arguments for invoking getSourceTmdb.
 */
export interface GetSourceTmdbOutputArgs {
    sourceId: pulumi.Input<string>;
}
