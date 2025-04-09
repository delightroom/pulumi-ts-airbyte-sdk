import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceIntruder(args: GetSourceIntruderArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceIntruderResult>;
/**
 * A collection of arguments for invoking getSourceIntruder.
 */
export interface GetSourceIntruderArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceIntruder.
 */
export interface GetSourceIntruderResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceIntruderResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceIntruderOutput(args: GetSourceIntruderOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceIntruderResult>;
/**
 * A collection of arguments for invoking getSourceIntruder.
 */
export interface GetSourceIntruderOutputArgs {
    sourceId: pulumi.Input<string>;
}
