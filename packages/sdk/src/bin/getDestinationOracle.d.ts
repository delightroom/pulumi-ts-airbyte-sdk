import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationOracle(args: GetDestinationOracleArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationOracleResult>;
/**
 * A collection of arguments for invoking getDestinationOracle.
 */
export interface GetDestinationOracleArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationOracle.
 */
export interface GetDestinationOracleResult {
    readonly configuration: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export declare function getDestinationOracleOutput(args: GetDestinationOracleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationOracleResult>;
/**
 * A collection of arguments for invoking getDestinationOracle.
 */
export interface GetDestinationOracleOutputArgs {
    destinationId: pulumi.Input<string>;
}
