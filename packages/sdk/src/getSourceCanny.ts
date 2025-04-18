// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceCanny(args: GetSourceCannyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCannyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceCanny:getSourceCanny", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCanny.
 */
export interface GetSourceCannyArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceCanny.
 */
export interface GetSourceCannyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCannyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceCannyOutput(args: GetSourceCannyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCannyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceCanny:getSourceCanny", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceCanny.
 */
export interface GetSourceCannyOutputArgs {
    sourceId: pulumi.Input<string>;
}
