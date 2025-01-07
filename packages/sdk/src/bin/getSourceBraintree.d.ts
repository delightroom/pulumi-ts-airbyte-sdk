import * as pulumi from "@pulumi/pulumi";
export declare function getSourceBraintree(args: GetSourceBraintreeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBraintreeResult>;
/**
 * A collection of arguments for invoking getSourceBraintree.
 */
export interface GetSourceBraintreeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBraintree.
 */
export interface GetSourceBraintreeResult {
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
export declare function getSourceBraintreeOutput(args: GetSourceBraintreeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBraintreeResult>;
/**
 * A collection of arguments for invoking getSourceBraintree.
 */
export interface GetSourceBraintreeOutputArgs {
    sourceId: pulumi.Input<string>;
}
