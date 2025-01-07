import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationCustom(args: GetDestinationCustomArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationCustomResult>;
/**
 * A collection of arguments for invoking getDestinationCustom.
 */
export interface GetDestinationCustomArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationCustom.
 */
export interface GetDestinationCustomResult {
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
export declare function getDestinationCustomOutput(args: GetDestinationCustomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationCustomResult>;
/**
 * A collection of arguments for invoking getDestinationCustom.
 */
export interface GetDestinationCustomOutputArgs {
    destinationId: pulumi.Input<string>;
}
