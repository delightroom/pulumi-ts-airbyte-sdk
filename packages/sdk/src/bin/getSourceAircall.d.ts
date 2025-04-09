import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAircall(args: GetSourceAircallArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAircallResult>;
/**
 * A collection of arguments for invoking getSourceAircall.
 */
export interface GetSourceAircallArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAircall.
 */
export interface GetSourceAircallResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAircallResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAircallOutput(args: GetSourceAircallOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAircallResult>;
/**
 * A collection of arguments for invoking getSourceAircall.
 */
export interface GetSourceAircallOutputArgs {
    sourceId: pulumi.Input<string>;
}
