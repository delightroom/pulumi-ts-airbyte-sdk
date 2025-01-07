import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationPostgres(args: GetDestinationPostgresArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationPostgresResult>;
/**
 * A collection of arguments for invoking getDestinationPostgres.
 */
export interface GetDestinationPostgresArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationPostgres.
 */
export interface GetDestinationPostgresResult {
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
export declare function getDestinationPostgresOutput(args: GetDestinationPostgresOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationPostgresResult>;
/**
 * A collection of arguments for invoking getDestinationPostgres.
 */
export interface GetDestinationPostgresOutputArgs {
    destinationId: pulumi.Input<string>;
}
