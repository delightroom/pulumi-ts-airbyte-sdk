import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePaypalTransactionResourceAllocation;
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
