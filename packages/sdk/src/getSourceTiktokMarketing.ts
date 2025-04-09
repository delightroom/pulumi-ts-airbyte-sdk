// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceTiktokMarketing(args: GetSourceTiktokMarketingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTiktokMarketingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTiktokMarketing:getSourceTiktokMarketing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTiktokMarketing.
 */
export interface GetSourceTiktokMarketingArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceTiktokMarketing.
 */
export interface GetSourceTiktokMarketingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTiktokMarketingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceTiktokMarketingOutput(args: GetSourceTiktokMarketingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTiktokMarketingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTiktokMarketing:getSourceTiktokMarketing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTiktokMarketing.
 */
export interface GetSourceTiktokMarketingOutputArgs {
    sourceId: pulumi.Input<string>;
}
