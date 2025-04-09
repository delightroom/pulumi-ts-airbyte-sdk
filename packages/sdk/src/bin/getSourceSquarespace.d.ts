import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSquarespace(args: GetSourceSquarespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSquarespaceResult>;
/**
 * A collection of arguments for invoking getSourceSquarespace.
 */
export interface GetSourceSquarespaceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSquarespace.
 */
export interface GetSourceSquarespaceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSquarespaceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSquarespaceOutput(args: GetSourceSquarespaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSquarespaceResult>;
/**
 * A collection of arguments for invoking getSourceSquarespace.
 */
export interface GetSourceSquarespaceOutputArgs {
    sourceId: pulumi.Input<string>;
}
