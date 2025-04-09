import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceReplyIo(args: GetSourceReplyIoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceReplyIoResult>;
/**
 * A collection of arguments for invoking getSourceReplyIo.
 */
export interface GetSourceReplyIoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceReplyIo.
 */
export interface GetSourceReplyIoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceReplyIoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceReplyIoOutput(args: GetSourceReplyIoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceReplyIoResult>;
/**
 * A collection of arguments for invoking getSourceReplyIo.
 */
export interface GetSourceReplyIoOutputArgs {
    sourceId: pulumi.Input<string>;
}
