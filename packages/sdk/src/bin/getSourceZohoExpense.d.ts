import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoExpense(args: GetSourceZohoExpenseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoExpenseResult>;
/**
 * A collection of arguments for invoking getSourceZohoExpense.
 */
export interface GetSourceZohoExpenseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoExpense.
 */
export interface GetSourceZohoExpenseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoExpenseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoExpenseOutput(args: GetSourceZohoExpenseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoExpenseResult>;
/**
 * A collection of arguments for invoking getSourceZohoExpense.
 */
export interface GetSourceZohoExpenseOutputArgs {
    sourceId: pulumi.Input<string>;
}
