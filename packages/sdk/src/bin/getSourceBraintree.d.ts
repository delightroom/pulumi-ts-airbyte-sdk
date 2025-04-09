import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBraintreeResourceAllocation;
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
