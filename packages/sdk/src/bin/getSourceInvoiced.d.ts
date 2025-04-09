import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceInvoiced(args: GetSourceInvoicedArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInvoicedResult>;
/**
 * A collection of arguments for invoking getSourceInvoiced.
 */
export interface GetSourceInvoicedArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInvoiced.
 */
export interface GetSourceInvoicedResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceInvoicedResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceInvoicedOutput(args: GetSourceInvoicedOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInvoicedResult>;
/**
 * A collection of arguments for invoking getSourceInvoiced.
 */
export interface GetSourceInvoicedOutputArgs {
    sourceId: pulumi.Input<string>;
}
