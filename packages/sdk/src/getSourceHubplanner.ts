// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceHubplanner(args: GetSourceHubplannerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHubplannerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHubplanner:getSourceHubplanner", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHubplanner.
 */
export interface GetSourceHubplannerArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceHubplanner.
 */
export interface GetSourceHubplannerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHubplannerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceHubplannerOutput(args: GetSourceHubplannerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHubplannerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHubplanner:getSourceHubplanner", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceHubplanner.
 */
export interface GetSourceHubplannerOutputArgs {
    sourceId: pulumi.Input<string>;
}
