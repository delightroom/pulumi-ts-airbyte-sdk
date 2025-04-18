// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSnapchatMarketing(args: GetSourceSnapchatMarketingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSnapchatMarketingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSnapchatMarketing:getSourceSnapchatMarketing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSnapchatMarketing.
 */
export interface GetSourceSnapchatMarketingArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSnapchatMarketing.
 */
export interface GetSourceSnapchatMarketingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSnapchatMarketingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSnapchatMarketingOutput(args: GetSourceSnapchatMarketingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSnapchatMarketingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSnapchatMarketing:getSourceSnapchatMarketing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSnapchatMarketing.
 */
export interface GetSourceSnapchatMarketingOutputArgs {
    sourceId: pulumi.Input<string>;
}
