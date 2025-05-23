import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSource7shifts(args: GetSource7shiftsArgs, opts?: pulumi.InvokeOptions): Promise<GetSource7shiftsResult>;
/**
 * A collection of arguments for invoking getSource7shifts.
 */
export interface GetSource7shiftsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSource7shifts.
 */
export interface GetSource7shiftsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSource7shiftsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSource7shiftsOutput(args: GetSource7shiftsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSource7shiftsResult>;
/**
 * A collection of arguments for invoking getSource7shifts.
 */
export interface GetSource7shiftsOutputArgs {
    sourceId: pulumi.Input<string>;
}
