import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGutendex(args: GetSourceGutendexArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGutendexResult>;
/**
 * A collection of arguments for invoking getSourceGutendex.
 */
export interface GetSourceGutendexArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGutendex.
 */
export interface GetSourceGutendexResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGutendexResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGutendexOutput(args: GetSourceGutendexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGutendexResult>;
/**
 * A collection of arguments for invoking getSourceGutendex.
 */
export interface GetSourceGutendexOutputArgs {
    sourceId: pulumi.Input<string>;
}
