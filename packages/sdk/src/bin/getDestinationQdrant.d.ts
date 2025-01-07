import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationQdrant(args: GetDestinationQdrantArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationQdrantResult>;
/**
 * A collection of arguments for invoking getDestinationQdrant.
 */
export interface GetDestinationQdrantArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationQdrant.
 */
export interface GetDestinationQdrantResult {
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
export declare function getDestinationQdrantOutput(args: GetDestinationQdrantOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationQdrantResult>;
/**
 * A collection of arguments for invoking getDestinationQdrant.
 */
export interface GetDestinationQdrantOutputArgs {
    destinationId: pulumi.Input<string>;
}
