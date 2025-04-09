import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationMysql(args: GetDestinationMysqlArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationMysqlResult>;
/**
 * A collection of arguments for invoking getDestinationMysql.
 */
export interface GetDestinationMysqlArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationMysql.
 */
export interface GetDestinationMysqlResult {
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
    readonly resourceAllocation: outputs.GetDestinationMysqlResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationMysqlOutput(args: GetDestinationMysqlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMysqlResult>;
/**
 * A collection of arguments for invoking getDestinationMysql.
 */
export interface GetDestinationMysqlOutputArgs {
    destinationId: pulumi.Input<string>;
}
