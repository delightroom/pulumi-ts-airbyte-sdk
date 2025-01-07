import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationTeradata(args: GetDestinationTeradataArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationTeradataResult>;
/**
 * A collection of arguments for invoking getDestinationTeradata.
 */
export interface GetDestinationTeradataArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationTeradata.
 */
export interface GetDestinationTeradataResult {
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
export declare function getDestinationTeradataOutput(args: GetDestinationTeradataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationTeradataResult>;
/**
 * A collection of arguments for invoking getDestinationTeradata.
 */
export interface GetDestinationTeradataOutputArgs {
    destinationId: pulumi.Input<string>;
}
