import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSparkpost(args: GetSourceSparkpostArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSparkpostResult>;
/**
 * A collection of arguments for invoking getSourceSparkpost.
 */
export interface GetSourceSparkpostArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSparkpost.
 */
export interface GetSourceSparkpostResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSparkpostResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSparkpostOutput(args: GetSourceSparkpostOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSparkpostResult>;
/**
 * A collection of arguments for invoking getSourceSparkpost.
 */
export interface GetSourceSparkpostOutputArgs {
    sourceId: pulumi.Input<string>;
}
