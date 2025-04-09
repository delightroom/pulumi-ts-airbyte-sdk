import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDatadog(args: GetSourceDatadogArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDatadogResult>;
/**
 * A collection of arguments for invoking getSourceDatadog.
 */
export interface GetSourceDatadogArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDatadog.
 */
export interface GetSourceDatadogResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDatadogResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDatadogOutput(args: GetSourceDatadogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDatadogResult>;
/**
 * A collection of arguments for invoking getSourceDatadog.
 */
export interface GetSourceDatadogOutputArgs {
    sourceId: pulumi.Input<string>;
}
