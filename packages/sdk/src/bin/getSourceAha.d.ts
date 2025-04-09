import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAha(args: GetSourceAhaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAhaResult>;
/**
 * A collection of arguments for invoking getSourceAha.
 */
export interface GetSourceAhaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAha.
 */
export interface GetSourceAhaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAhaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAhaOutput(args: GetSourceAhaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAhaResult>;
/**
 * A collection of arguments for invoking getSourceAha.
 */
export interface GetSourceAhaOutputArgs {
    sourceId: pulumi.Input<string>;
}
