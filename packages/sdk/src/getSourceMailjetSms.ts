// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceMailjetSms(args: GetSourceMailjetSmsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailjetSmsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMailjetSms:getSourceMailjetSms", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsResult {
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
export function getSourceMailjetSmsOutput(args: GetSourceMailjetSmsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailjetSmsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMailjetSms:getSourceMailjetSms", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMailjetSms.
 */
export interface GetSourceMailjetSmsOutputArgs {
    sourceId: pulumi.Input<string>;
}
