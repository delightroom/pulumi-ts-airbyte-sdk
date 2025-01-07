// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceRss(args: GetSourceRssArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRssResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRss:getSourceRss", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceRss.
 */
export interface GetSourceRssArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceRss.
 */
export interface GetSourceRssResult {
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
export function getSourceRssOutput(args: GetSourceRssOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRssResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRss:getSourceRss", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceRss.
 */
export interface GetSourceRssOutputArgs {
    sourceId: pulumi.Input<string>;
}
