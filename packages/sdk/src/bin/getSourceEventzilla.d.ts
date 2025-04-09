import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEventzilla(args: GetSourceEventzillaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEventzillaResult>;
/**
 * A collection of arguments for invoking getSourceEventzilla.
 */
export interface GetSourceEventzillaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEventzilla.
 */
export interface GetSourceEventzillaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEventzillaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEventzillaOutput(args: GetSourceEventzillaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEventzillaResult>;
/**
 * A collection of arguments for invoking getSourceEventzilla.
 */
export interface GetSourceEventzillaOutputArgs {
    sourceId: pulumi.Input<string>;
}
