// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourcePosthog(args: GetSourcePosthogArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePosthogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePosthog:getSourcePosthog", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePosthog.
 */
export interface GetSourcePosthogArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourcePosthog.
 */
export interface GetSourcePosthogResult {
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
export function getSourcePosthogOutput(args: GetSourcePosthogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePosthogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePosthog:getSourcePosthog", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePosthog.
 */
export interface GetSourcePosthogOutputArgs {
    sourceId: pulumi.Input<string>;
}
