import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceClockodo(args: GetSourceClockodoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClockodoResult>;
/**
 * A collection of arguments for invoking getSourceClockodo.
 */
export interface GetSourceClockodoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClockodo.
 */
export interface GetSourceClockodoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceClockodoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceClockodoOutput(args: GetSourceClockodoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClockodoResult>;
/**
 * A collection of arguments for invoking getSourceClockodo.
 */
export interface GetSourceClockodoOutputArgs {
    sourceId: pulumi.Input<string>;
}
