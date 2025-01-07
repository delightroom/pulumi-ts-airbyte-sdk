import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationTimeplus(args: GetDestinationTimeplusArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationTimeplusResult>;
/**
 * A collection of arguments for invoking getDestinationTimeplus.
 */
export interface GetDestinationTimeplusArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationTimeplus.
 */
export interface GetDestinationTimeplusResult {
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
export declare function getDestinationTimeplusOutput(args: GetDestinationTimeplusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationTimeplusResult>;
/**
 * A collection of arguments for invoking getDestinationTimeplus.
 */
export interface GetDestinationTimeplusOutputArgs {
    destinationId: pulumi.Input<string>;
}
