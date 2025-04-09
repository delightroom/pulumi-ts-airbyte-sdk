import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationMssql(args: GetDestinationMssqlArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationMssqlResult>;
/**
 * A collection of arguments for invoking getDestinationMssql.
 */
export interface GetDestinationMssqlArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationMssql.
 */
export interface GetDestinationMssqlResult {
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
    readonly resourceAllocation: outputs.GetDestinationMssqlResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationMssqlOutput(args: GetDestinationMssqlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMssqlResult>;
/**
 * A collection of arguments for invoking getDestinationMssql.
 */
export interface GetDestinationMssqlOutputArgs {
    destinationId: pulumi.Input<string>;
}
