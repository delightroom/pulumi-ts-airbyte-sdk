// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceSecoda(args: GetSourceSecodaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSecodaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSecoda:getSourceSecoda", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSecoda.
 */
export interface GetSourceSecodaArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSecoda.
 */
export interface GetSourceSecodaResult {
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
export function getSourceSecodaOutput(args: GetSourceSecodaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSecodaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSecoda:getSourceSecoda", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSecoda.
 */
export interface GetSourceSecodaOutputArgs {
    sourceId: pulumi.Input<string>;
}
