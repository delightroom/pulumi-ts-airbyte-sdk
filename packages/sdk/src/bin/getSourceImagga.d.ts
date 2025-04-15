import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceImagga(args: GetSourceImaggaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceImaggaResult>;
/**
 * A collection of arguments for invoking getSourceImagga.
 */
export interface GetSourceImaggaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceImagga.
 */
export interface GetSourceImaggaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceImaggaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceImaggaOutput(args: GetSourceImaggaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceImaggaResult>;
/**
 * A collection of arguments for invoking getSourceImagga.
 */
export interface GetSourceImaggaOutputArgs {
    sourceId: pulumi.Input<string>;
}
