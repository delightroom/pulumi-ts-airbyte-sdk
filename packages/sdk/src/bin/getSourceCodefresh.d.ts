import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCodefresh(args: GetSourceCodefreshArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCodefreshResult>;
/**
 * A collection of arguments for invoking getSourceCodefresh.
 */
export interface GetSourceCodefreshArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCodefresh.
 */
export interface GetSourceCodefreshResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCodefreshResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCodefreshOutput(args: GetSourceCodefreshOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCodefreshResult>;
/**
 * A collection of arguments for invoking getSourceCodefresh.
 */
export interface GetSourceCodefreshOutputArgs {
    sourceId: pulumi.Input<string>;
}
