import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBabelforce(args: GetSourceBabelforceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBabelforceResult>;
/**
 * A collection of arguments for invoking getSourceBabelforce.
 */
export interface GetSourceBabelforceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBabelforce.
 */
export interface GetSourceBabelforceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBabelforceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBabelforceOutput(args: GetSourceBabelforceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBabelforceResult>;
/**
 * A collection of arguments for invoking getSourceBabelforce.
 */
export interface GetSourceBabelforceOutputArgs {
    sourceId: pulumi.Input<string>;
}
