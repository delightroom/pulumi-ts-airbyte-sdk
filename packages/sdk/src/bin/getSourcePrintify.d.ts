import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePrintify(args: GetSourcePrintifyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePrintifyResult>;
/**
 * A collection of arguments for invoking getSourcePrintify.
 */
export interface GetSourcePrintifyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePrintify.
 */
export interface GetSourcePrintifyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePrintifyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePrintifyOutput(args: GetSourcePrintifyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePrintifyResult>;
/**
 * A collection of arguments for invoking getSourcePrintify.
 */
export interface GetSourcePrintifyOutputArgs {
    sourceId: pulumi.Input<string>;
}
