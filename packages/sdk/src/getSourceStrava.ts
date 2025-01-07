// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceStrava(args: GetSourceStravaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceStravaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceStrava:getSourceStrava", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceStrava.
 */
export interface GetSourceStravaArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceStrava.
 */
export interface GetSourceStravaResult {
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
export function getSourceStravaOutput(args: GetSourceStravaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceStravaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceStrava:getSourceStrava", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceStrava.
 */
export interface GetSourceStravaOutputArgs {
    sourceId: pulumi.Input<string>;
}
