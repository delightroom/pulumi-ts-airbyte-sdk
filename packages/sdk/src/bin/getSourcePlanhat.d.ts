import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePlanhat(args: GetSourcePlanhatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePlanhatResult>;
/**
 * A collection of arguments for invoking getSourcePlanhat.
 */
export interface GetSourcePlanhatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePlanhat.
 */
export interface GetSourcePlanhatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePlanhatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePlanhatOutput(args: GetSourcePlanhatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePlanhatResult>;
/**
 * A collection of arguments for invoking getSourcePlanhat.
 */
export interface GetSourcePlanhatOutputArgs {
    sourceId: pulumi.Input<string>;
}
