import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceJustSift(args: GetSourceJustSiftArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJustSiftResult>;
/**
 * A collection of arguments for invoking getSourceJustSift.
 */
export interface GetSourceJustSiftArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceJustSift.
 */
export interface GetSourceJustSiftResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceJustSiftResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceJustSiftOutput(args: GetSourceJustSiftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJustSiftResult>;
/**
 * A collection of arguments for invoking getSourceJustSift.
 */
export interface GetSourceJustSiftOutputArgs {
    sourceId: pulumi.Input<string>;
}
