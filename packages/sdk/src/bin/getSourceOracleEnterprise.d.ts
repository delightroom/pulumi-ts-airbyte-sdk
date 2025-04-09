import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOracleEnterprise(args: GetSourceOracleEnterpriseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOracleEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceOracleEnterprise.
 */
export interface GetSourceOracleEnterpriseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOracleEnterprise.
 */
export interface GetSourceOracleEnterpriseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOracleEnterpriseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOracleEnterpriseOutput(args: GetSourceOracleEnterpriseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOracleEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceOracleEnterprise.
 */
export interface GetSourceOracleEnterpriseOutputArgs {
    sourceId: pulumi.Input<string>;
}
