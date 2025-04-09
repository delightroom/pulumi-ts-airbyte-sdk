import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMode(args: GetSourceModeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceModeResult>;
/**
 * A collection of arguments for invoking getSourceMode.
 */
export interface GetSourceModeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMode.
 */
export interface GetSourceModeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceModeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceModeOutput(args: GetSourceModeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceModeResult>;
/**
 * A collection of arguments for invoking getSourceMode.
 */
export interface GetSourceModeOutputArgs {
    sourceId: pulumi.Input<string>;
}
