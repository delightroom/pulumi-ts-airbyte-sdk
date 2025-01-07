import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAmazonSqs(args: GetSourceAmazonSqsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAmazonSqsResult>;
/**
 * A collection of arguments for invoking getSourceAmazonSqs.
 */
export interface GetSourceAmazonSqsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAmazonSqs.
 */
export interface GetSourceAmazonSqsResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAmazonSqsOutput(args: GetSourceAmazonSqsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAmazonSqsResult>;
/**
 * A collection of arguments for invoking getSourceAmazonSqs.
 */
export interface GetSourceAmazonSqsOutputArgs {
    sourceId: pulumi.Input<string>;
}
