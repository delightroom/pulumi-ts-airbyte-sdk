import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationConvex(args: GetDestinationConvexArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationConvexResult>;
/**
 * A collection of arguments for invoking getDestinationConvex.
 */
export interface GetDestinationConvexArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationConvex.
 */
export interface GetDestinationConvexResult {
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
export declare function getDestinationConvexOutput(args: GetDestinationConvexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationConvexResult>;
/**
 * A collection of arguments for invoking getDestinationConvex.
 */
export interface GetDestinationConvexOutputArgs {
    destinationId: pulumi.Input<string>;
}
