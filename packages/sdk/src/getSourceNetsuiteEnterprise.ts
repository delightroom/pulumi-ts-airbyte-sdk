// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceNetsuiteEnterprise(args: GetSourceNetsuiteEnterpriseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNetsuiteEnterpriseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceNetsuiteEnterprise:getSourceNetsuiteEnterprise", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceNetsuiteEnterprise.
 */
export interface GetSourceNetsuiteEnterpriseArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceNetsuiteEnterprise.
 */
export interface GetSourceNetsuiteEnterpriseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNetsuiteEnterpriseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceNetsuiteEnterpriseOutput(args: GetSourceNetsuiteEnterpriseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNetsuiteEnterpriseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceNetsuiteEnterprise:getSourceNetsuiteEnterprise", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceNetsuiteEnterprise.
 */
export interface GetSourceNetsuiteEnterpriseOutputArgs {
    sourceId: pulumi.Input<string>;
}
