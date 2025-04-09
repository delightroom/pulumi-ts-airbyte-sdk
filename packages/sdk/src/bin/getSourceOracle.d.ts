import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOracle(args: GetSourceOracleArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOracleResult>;
/**
 * A collection of arguments for invoking getSourceOracle.
 */
export interface GetSourceOracleArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOracle.
 */
export interface GetSourceOracleResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOracleResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOracleOutput(args: GetSourceOracleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOracleResult>;
/**
 * A collection of arguments for invoking getSourceOracle.
 */
export interface GetSourceOracleOutputArgs {
    sourceId: pulumi.Input<string>;
}
