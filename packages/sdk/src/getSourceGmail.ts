// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceGmail(args: GetSourceGmailArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGmailResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGmail:getSourceGmail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGmail.
 */
export interface GetSourceGmailArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGmail.
 */
export interface GetSourceGmailResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGmailResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceGmailOutput(args: GetSourceGmailOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGmailResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGmail:getSourceGmail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGmail.
 */
export interface GetSourceGmailOutputArgs {
    sourceId: pulumi.Input<string>;
}
