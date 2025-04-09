import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePennylane(args: GetSourcePennylaneArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePennylaneResult>;
/**
 * A collection of arguments for invoking getSourcePennylane.
 */
export interface GetSourcePennylaneArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePennylane.
 */
export interface GetSourcePennylaneResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePennylaneResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePennylaneOutput(args: GetSourcePennylaneOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePennylaneResult>;
/**
 * A collection of arguments for invoking getSourcePennylane.
 */
export interface GetSourcePennylaneOutputArgs {
    sourceId: pulumi.Input<string>;
}
