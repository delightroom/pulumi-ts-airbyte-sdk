import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationPgvector(args: GetDestinationPgvectorArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationPgvectorResult>;
/**
 * A collection of arguments for invoking getDestinationPgvector.
 */
export interface GetDestinationPgvectorArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationPgvector.
 */
export interface GetDestinationPgvectorResult {
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
export declare function getDestinationPgvectorOutput(args: GetDestinationPgvectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationPgvectorResult>;
/**
 * A collection of arguments for invoking getDestinationPgvector.
 */
export interface GetDestinationPgvectorOutputArgs {
    destinationId: pulumi.Input<string>;
}
