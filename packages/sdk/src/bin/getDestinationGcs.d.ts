import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationGcs(args: GetDestinationGcsArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationGcsResult>;
/**
 * A collection of arguments for invoking getDestinationGcs.
 */
export interface GetDestinationGcsArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationGcs.
 */
export interface GetDestinationGcsResult {
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
export declare function getDestinationGcsOutput(args: GetDestinationGcsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationGcsResult>;
/**
 * A collection of arguments for invoking getDestinationGcs.
 */
export interface GetDestinationGcsOutputArgs {
    destinationId: pulumi.Input<string>;
}
