// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceZendeskTalk(args: GetSourceZendeskTalkArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZendeskTalkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZendeskTalk:getSourceZendeskTalk", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

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
export function getSourceZendeskTalkOutput(args: GetSourceZendeskTalkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZendeskTalkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZendeskTalk:getSourceZendeskTalk", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZendeskTalk.
 */
export interface GetSourceZendeskTalkOutputArgs {
    sourceId: pulumi.Input<string>;
}
