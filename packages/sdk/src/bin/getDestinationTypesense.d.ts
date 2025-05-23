import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationTypesense(args: GetDestinationTypesenseArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationTypesenseResult>;
/**
 * A collection of arguments for invoking getDestinationTypesense.
 */
export interface GetDestinationTypesenseArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationTypesense.
 */
export interface GetDestinationTypesenseResult {
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
    readonly resourceAllocation: outputs.GetDestinationTypesenseResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationTypesenseOutput(args: GetDestinationTypesenseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationTypesenseResult>;
/**
 * A collection of arguments for invoking getDestinationTypesense.
 */
export interface GetDestinationTypesenseOutputArgs {
    destinationId: pulumi.Input<string>;
}
