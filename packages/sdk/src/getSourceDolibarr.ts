// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceDolibarr(args: GetSourceDolibarrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDolibarrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceDolibarr:getSourceDolibarr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDolibarr.
 */
export interface GetSourceDolibarrArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceDolibarr.
 */
export interface GetSourceDolibarrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDolibarrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceDolibarrOutput(args: GetSourceDolibarrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDolibarrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceDolibarr:getSourceDolibarr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDolibarr.
 */
export interface GetSourceDolibarrOutputArgs {
    sourceId: pulumi.Input<string>;
}
