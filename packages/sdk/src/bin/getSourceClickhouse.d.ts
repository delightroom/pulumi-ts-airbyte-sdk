import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceClickhouse(args: GetSourceClickhouseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClickhouseResult>;
/**
 * A collection of arguments for invoking getSourceClickhouse.
 */
export interface GetSourceClickhouseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClickhouse.
 */
export interface GetSourceClickhouseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceClickhouseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceClickhouseOutput(args: GetSourceClickhouseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClickhouseResult>;
/**
 * A collection of arguments for invoking getSourceClickhouse.
 */
export interface GetSourceClickhouseOutputArgs {
    sourceId: pulumi.Input<string>;
}
