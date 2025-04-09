import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSnowflake(args: GetSourceSnowflakeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSnowflakeResult>;
/**
 * A collection of arguments for invoking getSourceSnowflake.
 */
export interface GetSourceSnowflakeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSnowflake.
 */
export interface GetSourceSnowflakeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSnowflakeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSnowflakeOutput(args: GetSourceSnowflakeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSnowflakeResult>;
/**
 * A collection of arguments for invoking getSourceSnowflake.
 */
export interface GetSourceSnowflakeOutputArgs {
    sourceId: pulumi.Input<string>;
}
