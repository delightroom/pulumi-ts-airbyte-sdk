import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNasa(args: GetSourceNasaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNasaResult>;
/**
 * A collection of arguments for invoking getSourceNasa.
 */
export interface GetSourceNasaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNasa.
 */
export interface GetSourceNasaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNasaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNasaOutput(args: GetSourceNasaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNasaResult>;
/**
 * A collection of arguments for invoking getSourceNasa.
 */
export interface GetSourceNasaOutputArgs {
    sourceId: pulumi.Input<string>;
}
