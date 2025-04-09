// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceMailjetMail(args: GetSourceMailjetMailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailjetMailResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMailjetMail:getSourceMailjetMail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMailjetMail.
 */
export interface GetSourceMailjetMailArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceMailjetMail.
 */
export interface GetSourceMailjetMailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailjetMailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceMailjetMailOutput(args: GetSourceMailjetMailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailjetMailResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMailjetMail:getSourceMailjetMail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMailjetMail.
 */
export interface GetSourceMailjetMailOutputArgs {
    sourceId: pulumi.Input<string>;
}
