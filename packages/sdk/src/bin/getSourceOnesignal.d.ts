import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOnesignal(args: GetSourceOnesignalArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOnesignalResult>;
/**
 * A collection of arguments for invoking getSourceOnesignal.
 */
export interface GetSourceOnesignalArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOnesignal.
 */
export interface GetSourceOnesignalResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOnesignalResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOnesignalOutput(args: GetSourceOnesignalOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOnesignalResult>;
/**
 * A collection of arguments for invoking getSourceOnesignal.
 */
export interface GetSourceOnesignalOutputArgs {
    sourceId: pulumi.Input<string>;
}
