import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationWeaviate(args: GetDestinationWeaviateArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationWeaviateResult>;
/**
 * A collection of arguments for invoking getDestinationWeaviate.
 */
export interface GetDestinationWeaviateArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationWeaviate.
 */
export interface GetDestinationWeaviateResult {
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
    readonly resourceAllocation: outputs.GetDestinationWeaviateResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationWeaviateOutput(args: GetDestinationWeaviateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationWeaviateResult>;
/**
 * A collection of arguments for invoking getDestinationWeaviate.
 */
export interface GetDestinationWeaviateOutputArgs {
    destinationId: pulumi.Input<string>;
}
