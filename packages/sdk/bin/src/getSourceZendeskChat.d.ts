import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
//# sourceMappingURL=getSourceZendeskChat.d.ts.map