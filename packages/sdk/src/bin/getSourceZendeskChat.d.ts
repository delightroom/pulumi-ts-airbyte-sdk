import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZendeskChat(args: GetSourceZendeskChatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZendeskChatResult>;
/**
 * A collection of arguments for invoking getSourceZendeskChat.
 */
export interface GetSourceZendeskChatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZendeskChat.
 */
export interface GetSourceZendeskChatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZendeskChatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZendeskChatOutput(args: GetSourceZendeskChatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZendeskChatResult>;
/**
 * A collection of arguments for invoking getSourceZendeskChat.
 */
export interface GetSourceZendeskChatOutputArgs {
    sourceId: pulumi.Input<string>;
}
