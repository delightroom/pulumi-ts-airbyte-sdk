import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWorkday(args: GetSourceWorkdayArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWorkdayResult>;
/**
 * A collection of arguments for invoking getSourceWorkday.
 */
export interface GetSourceWorkdayArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWorkday.
 */
export interface GetSourceWorkdayResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWorkdayResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWorkdayOutput(args: GetSourceWorkdayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWorkdayResult>;
/**
 * A collection of arguments for invoking getSourceWorkday.
 */
export interface GetSourceWorkdayOutputArgs {
    sourceId: pulumi.Input<string>;
}
