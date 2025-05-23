// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceActivecampaign(args: GetSourceActivecampaignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceActivecampaignResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceActivecampaign:getSourceActivecampaign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceActivecampaign.
 */
export interface GetSourceActivecampaignArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceActivecampaign.
 */
export interface GetSourceActivecampaignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceActivecampaignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceActivecampaignOutput(args: GetSourceActivecampaignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceActivecampaignResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceActivecampaign:getSourceActivecampaign", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceActivecampaign.
 */
export interface GetSourceActivecampaignOutputArgs {
    sourceId: pulumi.Input<string>;
}
