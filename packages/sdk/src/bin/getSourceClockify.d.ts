import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceClockify(args: GetSourceClockifyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClockifyResult>;
/**
 * A collection of arguments for invoking getSourceClockify.
 */
export interface GetSourceClockifyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClockify.
 */
export interface GetSourceClockifyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceClockifyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceClockifyOutput(args: GetSourceClockifyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClockifyResult>;
/**
 * A collection of arguments for invoking getSourceClockify.
 */
export interface GetSourceClockifyOutputArgs {
    sourceId: pulumi.Input<string>;
}
