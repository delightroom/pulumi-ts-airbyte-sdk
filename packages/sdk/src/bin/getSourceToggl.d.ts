import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceToggl(args: GetSourceTogglArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTogglResult>;
/**
 * A collection of arguments for invoking getSourceToggl.
 */
export interface GetSourceTogglArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceToggl.
 */
export interface GetSourceTogglResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTogglResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTogglOutput(args: GetSourceTogglOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTogglResult>;
/**
 * A collection of arguments for invoking getSourceToggl.
 */
export interface GetSourceTogglOutputArgs {
    sourceId: pulumi.Input<string>;
}
