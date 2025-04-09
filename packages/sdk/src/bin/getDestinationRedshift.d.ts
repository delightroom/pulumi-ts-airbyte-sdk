import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationRedshift(args: GetDestinationRedshiftArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationRedshiftResult>;
/**
 * A collection of arguments for invoking getDestinationRedshift.
 */
export interface GetDestinationRedshiftArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationRedshift.
 */
export interface GetDestinationRedshiftResult {
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
    readonly resourceAllocation: outputs.GetDestinationRedshiftResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationRedshiftOutput(args: GetDestinationRedshiftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationRedshiftResult>;
/**
 * A collection of arguments for invoking getDestinationRedshift.
 */
export interface GetDestinationRedshiftOutputArgs {
    destinationId: pulumi.Input<string>;
}
