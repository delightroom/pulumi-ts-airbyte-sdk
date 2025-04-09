import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFactorial(args: GetSourceFactorialArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFactorialResult>;
/**
 * A collection of arguments for invoking getSourceFactorial.
 */
export interface GetSourceFactorialArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFactorial.
 */
export interface GetSourceFactorialResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFactorialResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFactorialOutput(args: GetSourceFactorialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFactorialResult>;
/**
 * A collection of arguments for invoking getSourceFactorial.
 */
export interface GetSourceFactorialOutputArgs {
    sourceId: pulumi.Input<string>;
}
