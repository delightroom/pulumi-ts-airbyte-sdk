import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceInvoiceninja(args: GetSourceInvoiceninjaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInvoiceninjaResult>;
/**
 * A collection of arguments for invoking getSourceInvoiceninja.
 */
export interface GetSourceInvoiceninjaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInvoiceninja.
 */
export interface GetSourceInvoiceninjaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceInvoiceninjaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceInvoiceninjaOutput(args: GetSourceInvoiceninjaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInvoiceninjaResult>;
/**
 * A collection of arguments for invoking getSourceInvoiceninja.
 */
export interface GetSourceInvoiceninjaOutputArgs {
    sourceId: pulumi.Input<string>;
}
