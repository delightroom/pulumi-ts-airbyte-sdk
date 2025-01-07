// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceAuth0(args: GetSourceAuth0Args, opts?: pulumi.InvokeOptions): Promise<GetSourceAuth0Result> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAuth0:getSourceAuth0", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAuth0.
 */
export interface GetSourceAuth0Args {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceAuth0.
 */
export interface GetSourceAuth0Result {
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
export function getSourceAuth0Output(args: GetSourceAuth0OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAuth0Result> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAuth0:getSourceAuth0", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAuth0.
 */
export interface GetSourceAuth0OutputArgs {
    sourceId: pulumi.Input<string>;
}
