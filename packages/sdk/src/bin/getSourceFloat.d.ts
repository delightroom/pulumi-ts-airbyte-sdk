import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFloat(args: GetSourceFloatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFloatResult>;
/**
 * A collection of arguments for invoking getSourceFloat.
 */
export interface GetSourceFloatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFloat.
 */
export interface GetSourceFloatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFloatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFloatOutput(args: GetSourceFloatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFloatResult>;
/**
 * A collection of arguments for invoking getSourceFloat.
 */
export interface GetSourceFloatOutputArgs {
    sourceId: pulumi.Input<string>;
}
