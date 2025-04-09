import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDremio(args: GetSourceDremioArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDremioResult>;
/**
 * A collection of arguments for invoking getSourceDremio.
 */
export interface GetSourceDremioArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDremio.
 */
export interface GetSourceDremioResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDremioResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDremioOutput(args: GetSourceDremioOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDremioResult>;
/**
 * A collection of arguments for invoking getSourceDremio.
 */
export interface GetSourceDremioOutputArgs {
    sourceId: pulumi.Input<string>;
}
