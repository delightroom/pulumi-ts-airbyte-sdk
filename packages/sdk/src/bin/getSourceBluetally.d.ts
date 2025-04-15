import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBluetally(args: GetSourceBluetallyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBluetallyResult>;
/**
 * A collection of arguments for invoking getSourceBluetally.
 */
export interface GetSourceBluetallyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBluetally.
 */
export interface GetSourceBluetallyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBluetallyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBluetallyOutput(args: GetSourceBluetallyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBluetallyResult>;
/**
 * A collection of arguments for invoking getSourceBluetally.
 */
export interface GetSourceBluetallyOutputArgs {
    sourceId: pulumi.Input<string>;
}
