// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceBreezyHr(args: GetSourceBreezyHrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBreezyHrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBreezyHr:getSourceBreezyHr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBreezyHr.
 */
export interface GetSourceBreezyHrArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBreezyHr.
 */
export interface GetSourceBreezyHrResult {
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
export function getSourceBreezyHrOutput(args: GetSourceBreezyHrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBreezyHrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceBreezyHr:getSourceBreezyHr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBreezyHr.
 */
export interface GetSourceBreezyHrOutputArgs {
    sourceId: pulumi.Input<string>;
}
