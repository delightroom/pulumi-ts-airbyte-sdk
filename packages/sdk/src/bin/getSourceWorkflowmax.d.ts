import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWorkflowmax(args: GetSourceWorkflowmaxArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWorkflowmaxResult>;
/**
 * A collection of arguments for invoking getSourceWorkflowmax.
 */
export interface GetSourceWorkflowmaxArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWorkflowmax.
 */
export interface GetSourceWorkflowmaxResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWorkflowmaxResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWorkflowmaxOutput(args: GetSourceWorkflowmaxOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWorkflowmaxResult>;
/**
 * A collection of arguments for invoking getSourceWorkflowmax.
 */
export interface GetSourceWorkflowmaxOutputArgs {
    sourceId: pulumi.Input<string>;
}
