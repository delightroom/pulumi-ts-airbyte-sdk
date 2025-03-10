import * as pulumi from "@pulumi/pulumi";
export declare function getSourceZendeskTalk(args: GetSourceZendeskTalkArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZendeskTalkResult>;
/**
 * A collection of arguments for invoking getSourceZendeskTalk.
 */
export interface GetSourceZendeskTalkArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZendeskTalk.
 */
export interface GetSourceZendeskTalkResult {
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
export declare function getSourceZendeskTalkOutput(args: GetSourceZendeskTalkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZendeskTalkResult>;
/**
 * A collection of arguments for invoking getSourceZendeskTalk.
 */
export interface GetSourceZendeskTalkOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceZendeskTalk.d.ts.map