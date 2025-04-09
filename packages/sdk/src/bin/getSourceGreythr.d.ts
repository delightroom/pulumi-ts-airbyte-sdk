import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGreythr(args: GetSourceGreythrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGreythrResult>;
/**
 * A collection of arguments for invoking getSourceGreythr.
 */
export interface GetSourceGreythrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGreythr.
 */
export interface GetSourceGreythrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGreythrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGreythrOutput(args: GetSourceGreythrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGreythrResult>;
/**
 * A collection of arguments for invoking getSourceGreythr.
 */
export interface GetSourceGreythrOutputArgs {
    sourceId: pulumi.Input<string>;
}
