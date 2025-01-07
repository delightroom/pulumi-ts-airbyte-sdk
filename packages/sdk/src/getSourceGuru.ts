// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceGuru(args: GetSourceGuruArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGuruResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGuru:getSourceGuru", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGuru.
 */
export interface GetSourceGuruArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGuru.
 */
export interface GetSourceGuruResult {
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
export function getSourceGuruOutput(args: GetSourceGuruOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGuruResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGuru:getSourceGuru", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGuru.
 */
export interface GetSourceGuruOutputArgs {
    sourceId: pulumi.Input<string>;
}
