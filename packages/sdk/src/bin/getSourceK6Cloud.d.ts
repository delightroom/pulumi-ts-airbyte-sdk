import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceK6Cloud(args: GetSourceK6CloudArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceK6CloudResult>;
/**
 * A collection of arguments for invoking getSourceK6Cloud.
 */
export interface GetSourceK6CloudArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceK6Cloud.
 */
export interface GetSourceK6CloudResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceK6CloudResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceK6CloudOutput(args: GetSourceK6CloudOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceK6CloudResult>;
/**
 * A collection of arguments for invoking getSourceK6Cloud.
 */
export interface GetSourceK6CloudOutputArgs {
    sourceId: pulumi.Input<string>;
}
