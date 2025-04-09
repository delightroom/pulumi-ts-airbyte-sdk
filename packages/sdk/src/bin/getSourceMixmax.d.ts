import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMixmax(args: GetSourceMixmaxArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMixmaxResult>;
/**
 * A collection of arguments for invoking getSourceMixmax.
 */
export interface GetSourceMixmaxArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMixmax.
 */
export interface GetSourceMixmaxResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMixmaxResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMixmaxOutput(args: GetSourceMixmaxOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMixmaxResult>;
/**
 * A collection of arguments for invoking getSourceMixmax.
 */
export interface GetSourceMixmaxOutputArgs {
    sourceId: pulumi.Input<string>;
}
