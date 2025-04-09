import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAmplitude(args: GetSourceAmplitudeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAmplitudeResult>;
/**
 * A collection of arguments for invoking getSourceAmplitude.
 */
export interface GetSourceAmplitudeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAmplitude.
 */
export interface GetSourceAmplitudeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAmplitudeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAmplitudeOutput(args: GetSourceAmplitudeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAmplitudeResult>;
/**
 * A collection of arguments for invoking getSourceAmplitude.
 */
export interface GetSourceAmplitudeOutputArgs {
    sourceId: pulumi.Input<string>;
}
