// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceGetlago(args: GetSourceGetlagoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGetlagoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGetlago:getSourceGetlago", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGetlago.
 */
export interface GetSourceGetlagoArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGetlago.
 */
export interface GetSourceGetlagoResult {
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
export function getSourceGetlagoOutput(args: GetSourceGetlagoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGetlagoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGetlago:getSourceGetlago", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGetlago.
 */
export interface GetSourceGetlagoOutputArgs {
    sourceId: pulumi.Input<string>;
}
