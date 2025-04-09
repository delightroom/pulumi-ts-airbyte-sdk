import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTvmazeSchedule(args: GetSourceTvmazeScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTvmazeScheduleResult>;
/**
 * A collection of arguments for invoking getSourceTvmazeSchedule.
 */
export interface GetSourceTvmazeScheduleArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTvmazeSchedule.
 */
export interface GetSourceTvmazeScheduleResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTvmazeScheduleResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTvmazeScheduleOutput(args: GetSourceTvmazeScheduleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTvmazeScheduleResult>;
/**
 * A collection of arguments for invoking getSourceTvmazeSchedule.
 */
export interface GetSourceTvmazeScheduleOutputArgs {
    sourceId: pulumi.Input<string>;
}
