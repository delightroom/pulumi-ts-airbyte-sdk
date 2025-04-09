import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationClickhouse(args: GetDestinationClickhouseArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationClickhouseResult>;
/**
 * A collection of arguments for invoking getDestinationClickhouse.
 */
export interface GetDestinationClickhouseArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationClickhouse.
 */
export interface GetDestinationClickhouseResult {
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
    readonly resourceAllocation: outputs.GetDestinationClickhouseResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationClickhouseOutput(args: GetDestinationClickhouseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationClickhouseResult>;
/**
 * A collection of arguments for invoking getDestinationClickhouse.
 */
export interface GetDestinationClickhouseOutputArgs {
    destinationId: pulumi.Input<string>;
}
