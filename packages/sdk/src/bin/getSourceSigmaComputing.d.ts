import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSigmaComputing(args: GetSourceSigmaComputingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSigmaComputingResult>;
/**
 * A collection of arguments for invoking getSourceSigmaComputing.
 */
export interface GetSourceSigmaComputingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSigmaComputing.
 */
export interface GetSourceSigmaComputingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSigmaComputingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSigmaComputingOutput(args: GetSourceSigmaComputingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSigmaComputingResult>;
/**
 * A collection of arguments for invoking getSourceSigmaComputing.
 */
export interface GetSourceSigmaComputingOutputArgs {
    sourceId: pulumi.Input<string>;
}
