import * as pulumi from "@pulumi/pulumi";
export declare function getSourcePaypalTransaction(args: GetSourcePaypalTransactionArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePaypalTransactionResult>;
/**
 * A collection of arguments for invoking getSourcePaypalTransaction.
 */
export interface GetSourcePaypalTransactionArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePaypalTransaction.
 */
export interface GetSourcePaypalTransactionResult {
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
export declare function getSourcePaypalTransactionOutput(args: GetSourcePaypalTransactionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePaypalTransactionResult>;
/**
 * A collection of arguments for invoking getSourcePaypalTransaction.
 */
export interface GetSourcePaypalTransactionOutputArgs {
    sourceId: pulumi.Input<string>;
}
