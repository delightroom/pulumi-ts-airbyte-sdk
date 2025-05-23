// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceConvertkit(args: GetSourceConvertkitArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConvertkitResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceConvertkit:getSourceConvertkit", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceConvertkit.
 */
export interface GetSourceConvertkitArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceConvertkit.
 */
export interface GetSourceConvertkitResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceConvertkitResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceConvertkitOutput(args: GetSourceConvertkitOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConvertkitResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceConvertkit:getSourceConvertkit", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceConvertkit.
 */
export interface GetSourceConvertkitOutputArgs {
    sourceId: pulumi.Input<string>;
}
