import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAkeneo(args: GetSourceAkeneoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAkeneoResult>;
/**
 * A collection of arguments for invoking getSourceAkeneo.
 */
export interface GetSourceAkeneoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAkeneo.
 */
export interface GetSourceAkeneoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAkeneoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAkeneoOutput(args: GetSourceAkeneoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAkeneoResult>;
/**
 * A collection of arguments for invoking getSourceAkeneo.
 */
export interface GetSourceAkeneoOutputArgs {
    sourceId: pulumi.Input<string>;
}
