import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceProductboard(args: GetSourceProductboardArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceProductboardResult>;
/**
 * A collection of arguments for invoking getSourceProductboard.
 */
export interface GetSourceProductboardArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceProductboard.
 */
export interface GetSourceProductboardResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceProductboardResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceProductboardOutput(args: GetSourceProductboardOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceProductboardResult>;
/**
 * A collection of arguments for invoking getSourceProductboard.
 */
export interface GetSourceProductboardOutputArgs {
    sourceId: pulumi.Input<string>;
}
