// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceDingConnect(args: GetSourceDingConnectArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDingConnectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceDingConnect:getSourceDingConnect", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDingConnect.
 */
export interface GetSourceDingConnectArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceDingConnect.
 */
export interface GetSourceDingConnectResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDingConnectResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceDingConnectOutput(args: GetSourceDingConnectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDingConnectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceDingConnect:getSourceDingConnect", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDingConnect.
 */
export interface GetSourceDingConnectOutputArgs {
    sourceId: pulumi.Input<string>;
}
