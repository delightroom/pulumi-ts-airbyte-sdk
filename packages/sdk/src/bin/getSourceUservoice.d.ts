import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceUservoice(args: GetSourceUservoiceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceUservoiceResult>;
/**
 * A collection of arguments for invoking getSourceUservoice.
 */
export interface GetSourceUservoiceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceUservoice.
 */
export interface GetSourceUservoiceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceUservoiceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceUservoiceOutput(args: GetSourceUservoiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceUservoiceResult>;
/**
 * A collection of arguments for invoking getSourceUservoice.
 */
export interface GetSourceUservoiceOutputArgs {
    sourceId: pulumi.Input<string>;
}
