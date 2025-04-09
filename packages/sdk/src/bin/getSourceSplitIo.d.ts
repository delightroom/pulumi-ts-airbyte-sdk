import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSplitIo(args: GetSourceSplitIoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSplitIoResult>;
/**
 * A collection of arguments for invoking getSourceSplitIo.
 */
export interface GetSourceSplitIoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSplitIo.
 */
export interface GetSourceSplitIoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSplitIoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSplitIoOutput(args: GetSourceSplitIoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSplitIoResult>;
/**
 * A collection of arguments for invoking getSourceSplitIo.
 */
export interface GetSourceSplitIoOutputArgs {
    sourceId: pulumi.Input<string>;
}
