import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRocketChat(args: GetSourceRocketChatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRocketChatResult>;
/**
 * A collection of arguments for invoking getSourceRocketChat.
 */
export interface GetSourceRocketChatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRocketChat.
 */
export interface GetSourceRocketChatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRocketChatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRocketChatOutput(args: GetSourceRocketChatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRocketChatResult>;
/**
 * A collection of arguments for invoking getSourceRocketChat.
 */
export interface GetSourceRocketChatOutputArgs {
    sourceId: pulumi.Input<string>;
}
