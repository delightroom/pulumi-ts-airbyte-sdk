import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationDuckdb(args: GetDestinationDuckdbArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDuckdbResult>;
/**
 * A collection of arguments for invoking getDestinationDuckdb.
 */
export interface GetDestinationDuckdbArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationDuckdb.
 */
export interface GetDestinationDuckdbResult {
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
    readonly resourceAllocation: outputs.GetDestinationDuckdbResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationDuckdbOutput(args: GetDestinationDuckdbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDuckdbResult>;
/**
 * A collection of arguments for invoking getDestinationDuckdb.
 */
export interface GetDestinationDuckdbOutputArgs {
    destinationId: pulumi.Input<string>;
}
