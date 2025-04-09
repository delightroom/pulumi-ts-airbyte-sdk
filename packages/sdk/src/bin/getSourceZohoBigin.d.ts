import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoBigin(args: GetSourceZohoBiginArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoBiginResult>;
/**
 * A collection of arguments for invoking getSourceZohoBigin.
 */
export interface GetSourceZohoBiginArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoBigin.
 */
export interface GetSourceZohoBiginResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoBiginResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoBiginOutput(args: GetSourceZohoBiginOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoBiginResult>;
/**
 * A collection of arguments for invoking getSourceZohoBigin.
 */
export interface GetSourceZohoBiginOutputArgs {
    sourceId: pulumi.Input<string>;
}
