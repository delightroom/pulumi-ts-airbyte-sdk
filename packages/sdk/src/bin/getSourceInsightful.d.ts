import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceInsightful(args: GetSourceInsightfulArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInsightfulResult>;
/**
 * A collection of arguments for invoking getSourceInsightful.
 */
export interface GetSourceInsightfulArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInsightful.
 */
export interface GetSourceInsightfulResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceInsightfulResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceInsightfulOutput(args: GetSourceInsightfulOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInsightfulResult>;
/**
 * A collection of arguments for invoking getSourceInsightful.
 */
export interface GetSourceInsightfulOutputArgs {
    sourceId: pulumi.Input<string>;
}
