import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationPinecone(args: GetDestinationPineconeArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationPineconeResult>;
/**
 * A collection of arguments for invoking getDestinationPinecone.
 */
export interface GetDestinationPineconeArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationPinecone.
 */
export interface GetDestinationPineconeResult {
    readonly configuration: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export declare function getDestinationPineconeOutput(args: GetDestinationPineconeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationPineconeResult>;
/**
 * A collection of arguments for invoking getDestinationPinecone.
 */
export interface GetDestinationPineconeOutputArgs {
    destinationId: pulumi.Input<string>;
}
