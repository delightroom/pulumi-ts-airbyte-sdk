import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationMssqlV2(args: GetDestinationMssqlV2Args, opts?: pulumi.InvokeOptions): Promise<GetDestinationMssqlV2Result>;
/**
 * A collection of arguments for invoking getDestinationMssqlV2.
 */
export interface GetDestinationMssqlV2Args {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationMssqlV2.
 */
export interface GetDestinationMssqlV2Result {
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
    readonly resourceAllocation: outputs.GetDestinationMssqlV2ResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationMssqlV2Output(args: GetDestinationMssqlV2OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMssqlV2Result>;
/**
 * A collection of arguments for invoking getDestinationMssqlV2.
 */
export interface GetDestinationMssqlV2OutputArgs {
    destinationId: pulumi.Input<string>;
}
