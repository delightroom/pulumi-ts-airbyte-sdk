import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFlowlu(args: GetSourceFlowluArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFlowluResult>;
/**
 * A collection of arguments for invoking getSourceFlowlu.
 */
export interface GetSourceFlowluArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFlowlu.
 */
export interface GetSourceFlowluResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFlowluResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFlowluOutput(args: GetSourceFlowluOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFlowluResult>;
/**
 * A collection of arguments for invoking getSourceFlowlu.
 */
export interface GetSourceFlowluOutputArgs {
    sourceId: pulumi.Input<string>;
}
