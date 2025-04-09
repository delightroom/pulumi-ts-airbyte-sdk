import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSecoda(args: GetSourceSecodaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSecodaResult>;
/**
 * A collection of arguments for invoking getSourceSecoda.
 */
export interface GetSourceSecodaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSecoda.
 */
export interface GetSourceSecodaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSecodaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSecodaOutput(args: GetSourceSecodaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSecodaResult>;
/**
 * A collection of arguments for invoking getSourceSecoda.
 */
export interface GetSourceSecodaOutputArgs {
    sourceId: pulumi.Input<string>;
}
