import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationS3(args: GetDestinationS3Args, opts?: pulumi.InvokeOptions): Promise<GetDestinationS3Result>;
/**
 * A collection of arguments for invoking getDestinationS3.
 */
export interface GetDestinationS3Args {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationS3.
 */
export interface GetDestinationS3Result {
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
export declare function getDestinationS3Output(args: GetDestinationS3OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationS3Result>;
/**
 * A collection of arguments for invoking getDestinationS3.
 */
export interface GetDestinationS3OutputArgs {
    destinationId: pulumi.Input<string>;
}
//# sourceMappingURL=getDestinationS3.d.ts.map