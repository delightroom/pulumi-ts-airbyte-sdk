import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoInvoice(args: GetSourceZohoInvoiceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoInvoiceResult>;
/**
 * A collection of arguments for invoking getSourceZohoInvoice.
 */
export interface GetSourceZohoInvoiceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoInvoice.
 */
export interface GetSourceZohoInvoiceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoInvoiceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoInvoiceOutput(args: GetSourceZohoInvoiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoInvoiceResult>;
/**
 * A collection of arguments for invoking getSourceZohoInvoice.
 */
export interface GetSourceZohoInvoiceOutputArgs {
    sourceId: pulumi.Input<string>;
}
