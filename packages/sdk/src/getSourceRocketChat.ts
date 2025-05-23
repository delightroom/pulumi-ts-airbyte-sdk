// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceRocketChat(args: GetSourceRocketChatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRocketChatResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRocketChat:getSourceRocketChat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

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
export function getSourceRocketChatOutput(args: GetSourceRocketChatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRocketChatResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRocketChat:getSourceRocketChat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceRocketChat.
 */
export interface GetSourceRocketChatOutputArgs {
    sourceId: pulumi.Input<string>;
}
