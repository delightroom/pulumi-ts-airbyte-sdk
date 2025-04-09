import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationAstra(args: GetDestinationAstraArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationAstraResult>;
/**
 * A collection of arguments for invoking getDestinationAstra.
 */
export interface GetDestinationAstraArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationAstra.
 */
export interface GetDestinationAstraResult {
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
    readonly resourceAllocation: outputs.GetDestinationAstraResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationAstraOutput(args: GetDestinationAstraOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationAstraResult>;
/**
 * A collection of arguments for invoking getDestinationAstra.
 */
export interface GetDestinationAstraOutputArgs {
    destinationId: pulumi.Input<string>;
}
