import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationDevNull(args: GetDestinationDevNullArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDevNullResult>;
/**
 * A collection of arguments for invoking getDestinationDevNull.
 */
export interface GetDestinationDevNullArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationDevNull.
 */
export interface GetDestinationDevNullResult {
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
    readonly resourceAllocation: outputs.GetDestinationDevNullResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationDevNullOutput(args: GetDestinationDevNullOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDevNullResult>;
/**
 * A collection of arguments for invoking getDestinationDevNull.
 */
export interface GetDestinationDevNullOutputArgs {
    destinationId: pulumi.Input<string>;
}
