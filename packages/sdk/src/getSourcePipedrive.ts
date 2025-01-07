// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourcePipedrive(args: GetSourcePipedriveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePipedriveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePipedrive:getSourcePipedrive", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePipedrive.
 */
export interface GetSourcePipedriveArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourcePipedrive.
 */
export interface GetSourcePipedriveResult {
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
export function getSourcePipedriveOutput(args: GetSourcePipedriveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePipedriveResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePipedrive:getSourcePipedrive", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePipedrive.
 */
export interface GetSourcePipedriveOutputArgs {
    sourceId: pulumi.Input<string>;
}
