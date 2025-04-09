import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationMilvus(args: GetDestinationMilvusArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationMilvusResult>;
/**
 * A collection of arguments for invoking getDestinationMilvus.
 */
export interface GetDestinationMilvusArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationMilvus.
 */
export interface GetDestinationMilvusResult {
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
    readonly resourceAllocation: outputs.GetDestinationMilvusResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationMilvusOutput(args: GetDestinationMilvusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMilvusResult>;
/**
 * A collection of arguments for invoking getDestinationMilvus.
 */
export interface GetDestinationMilvusOutputArgs {
    destinationId: pulumi.Input<string>;
}
