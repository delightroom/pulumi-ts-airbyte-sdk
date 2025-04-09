import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEasypost(args: GetSourceEasypostArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEasypostResult>;
/**
 * A collection of arguments for invoking getSourceEasypost.
 */
export interface GetSourceEasypostArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEasypost.
 */
export interface GetSourceEasypostResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEasypostResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEasypostOutput(args: GetSourceEasypostOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEasypostResult>;
/**
 * A collection of arguments for invoking getSourceEasypost.
 */
export interface GetSourceEasypostOutputArgs {
    sourceId: pulumi.Input<string>;
}
