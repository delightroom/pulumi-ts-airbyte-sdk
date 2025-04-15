import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePerigon(args: GetSourcePerigonArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePerigonResult>;
/**
 * A collection of arguments for invoking getSourcePerigon.
 */
export interface GetSourcePerigonArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePerigon.
 */
export interface GetSourcePerigonResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePerigonResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePerigonOutput(args: GetSourcePerigonOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePerigonResult>;
/**
 * A collection of arguments for invoking getSourcePerigon.
 */
export interface GetSourcePerigonOutputArgs {
    sourceId: pulumi.Input<string>;
}
