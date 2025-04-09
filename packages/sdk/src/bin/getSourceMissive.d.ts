import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMissive(args: GetSourceMissiveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMissiveResult>;
/**
 * A collection of arguments for invoking getSourceMissive.
 */
export interface GetSourceMissiveArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMissive.
 */
export interface GetSourceMissiveResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMissiveResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMissiveOutput(args: GetSourceMissiveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMissiveResult>;
/**
 * A collection of arguments for invoking getSourceMissive.
 */
export interface GetSourceMissiveOutputArgs {
    sourceId: pulumi.Input<string>;
}
