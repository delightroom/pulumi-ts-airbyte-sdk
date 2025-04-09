import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMerge(args: GetSourceMergeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMergeResult>;
/**
 * A collection of arguments for invoking getSourceMerge.
 */
export interface GetSourceMergeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMerge.
 */
export interface GetSourceMergeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMergeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMergeOutput(args: GetSourceMergeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMergeResult>;
/**
 * A collection of arguments for invoking getSourceMerge.
 */
export interface GetSourceMergeOutputArgs {
    sourceId: pulumi.Input<string>;
}
