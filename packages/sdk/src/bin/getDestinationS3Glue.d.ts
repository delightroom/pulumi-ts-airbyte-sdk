import * as pulumi from "@pulumi/pulumi";
export declare function getDestinationS3Glue(args: GetDestinationS3GlueArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationS3GlueResult>;
/**
 * A collection of arguments for invoking getDestinationS3Glue.
 */
export interface GetDestinationS3GlueArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationS3Glue.
 */
export interface GetDestinationS3GlueResult {
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
export declare function getDestinationS3GlueOutput(args: GetDestinationS3GlueOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationS3GlueResult>;
/**
 * A collection of arguments for invoking getDestinationS3Glue.
 */
export interface GetDestinationS3GlueOutputArgs {
    destinationId: pulumi.Input<string>;
}
