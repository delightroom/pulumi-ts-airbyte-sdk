import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationSnowflake(args: GetDestinationSnowflakeArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationSnowflakeResult>;
/**
 * A collection of arguments for invoking getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetDestinationSnowflakeResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationSnowflakeOutput(args: GetDestinationSnowflakeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationSnowflakeResult>;
/**
 * A collection of arguments for invoking getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeOutputArgs {
    destinationId: pulumi.Input<string>;
}
