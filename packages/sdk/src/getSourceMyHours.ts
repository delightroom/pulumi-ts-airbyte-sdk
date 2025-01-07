// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceMyHours(args: GetSourceMyHoursArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMyHoursResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMyHours:getSourceMyHours", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMyHours.
 */
export interface GetSourceMyHoursArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceMyHours.
 */
export interface GetSourceMyHoursResult {
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
export function getSourceMyHoursOutput(args: GetSourceMyHoursOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMyHoursResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMyHours:getSourceMyHours", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceMyHours.
 */
export interface GetSourceMyHoursOutputArgs {
    sourceId: pulumi.Input<string>;
}
