import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSharetribe(args: GetSourceSharetribeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSharetribeResult>;
/**
 * A collection of arguments for invoking getSourceSharetribe.
 */
export interface GetSourceSharetribeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSharetribe.
 */
export interface GetSourceSharetribeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSharetribeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSharetribeOutput(args: GetSourceSharetribeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSharetribeResult>;
/**
 * A collection of arguments for invoking getSourceSharetribe.
 */
export interface GetSourceSharetribeOutputArgs {
    sourceId: pulumi.Input<string>;
}
