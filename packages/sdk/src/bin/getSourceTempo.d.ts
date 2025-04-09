import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTempo(args: GetSourceTempoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTempoResult>;
/**
 * A collection of arguments for invoking getSourceTempo.
 */
export interface GetSourceTempoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTempo.
 */
export interface GetSourceTempoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTempoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTempoOutput(args: GetSourceTempoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTempoResult>;
/**
 * A collection of arguments for invoking getSourceTempo.
 */
export interface GetSourceTempoOutputArgs {
    sourceId: pulumi.Input<string>;
}
