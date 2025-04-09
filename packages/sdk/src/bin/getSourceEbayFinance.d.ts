import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEbayFinance(args: GetSourceEbayFinanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEbayFinanceResult>;
/**
 * A collection of arguments for invoking getSourceEbayFinance.
 */
export interface GetSourceEbayFinanceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEbayFinance.
 */
export interface GetSourceEbayFinanceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEbayFinanceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEbayFinanceOutput(args: GetSourceEbayFinanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEbayFinanceResult>;
/**
 * A collection of arguments for invoking getSourceEbayFinance.
 */
export interface GetSourceEbayFinanceOutputArgs {
    sourceId: pulumi.Input<string>;
}
