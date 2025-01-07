// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceDbt(args: GetSourceDbtArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDbtResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceDbt:getSourceDbt", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDbt.
 */
export interface GetSourceDbtArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceDbt.
 */
export interface GetSourceDbtResult {
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
export function getSourceDbtOutput(args: GetSourceDbtOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDbtResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceDbt:getSourceDbt", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceDbt.
 */
export interface GetSourceDbtOutputArgs {
    sourceId: pulumi.Input<string>;
}
