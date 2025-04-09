import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMention(args: GetSourceMentionArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMentionResult>;
/**
 * A collection of arguments for invoking getSourceMention.
 */
export interface GetSourceMentionArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMention.
 */
export interface GetSourceMentionResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMentionResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMentionOutput(args: GetSourceMentionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMentionResult>;
/**
 * A collection of arguments for invoking getSourceMention.
 */
export interface GetSourceMentionOutputArgs {
    sourceId: pulumi.Input<string>;
}
