// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSendowl(args: GetSourceSendowlArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSendowlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSendowl:getSourceSendowl", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSendowl.
 */
export interface GetSourceSendowlArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSendowl.
 */
export interface GetSourceSendowlResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSendowlResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSendowlOutput(args: GetSourceSendowlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSendowlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSendowl:getSourceSendowl", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSendowl.
 */
export interface GetSourceSendowlOutputArgs {
    sourceId: pulumi.Input<string>;
}
