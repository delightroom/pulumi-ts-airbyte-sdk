// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceEzofficeinventory(args: GetSourceEzofficeinventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEzofficeinventoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEzofficeinventory:getSourceEzofficeinventory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceEzofficeinventory.
 */
export interface GetSourceEzofficeinventoryArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceEzofficeinventory.
 */
export interface GetSourceEzofficeinventoryResult {
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
export function getSourceEzofficeinventoryOutput(args: GetSourceEzofficeinventoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEzofficeinventoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEzofficeinventory:getSourceEzofficeinventory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceEzofficeinventory.
 */
export interface GetSourceEzofficeinventoryOutputArgs {
    sourceId: pulumi.Input<string>;
}
