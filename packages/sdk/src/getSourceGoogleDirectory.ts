// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceGoogleDirectory(args: GetSourceGoogleDirectoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleDirectoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGoogleDirectory:getSourceGoogleDirectory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGoogleDirectory.
 */
export interface GetSourceGoogleDirectoryArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGoogleDirectory.
 */
export interface GetSourceGoogleDirectoryResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleDirectoryResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceGoogleDirectoryOutput(args: GetSourceGoogleDirectoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleDirectoryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGoogleDirectory:getSourceGoogleDirectory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGoogleDirectory.
 */
export interface GetSourceGoogleDirectoryOutputArgs {
    sourceId: pulumi.Input<string>;
}
