import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
