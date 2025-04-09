import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRollbar(args: GetSourceRollbarArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRollbarResult>;
/**
 * A collection of arguments for invoking getSourceRollbar.
 */
export interface GetSourceRollbarArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRollbar.
 */
export interface GetSourceRollbarResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRollbarResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRollbarOutput(args: GetSourceRollbarOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRollbarResult>;
/**
 * A collection of arguments for invoking getSourceRollbar.
 */
export interface GetSourceRollbarOutputArgs {
    sourceId: pulumi.Input<string>;
}
