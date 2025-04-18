// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceKlausApi(args: GetSourceKlausApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKlausApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceKlausApi:getSourceKlausApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceKlausApi.
 */
export interface GetSourceKlausApiArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceKlausApi.
 */
export interface GetSourceKlausApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKlausApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceKlausApiOutput(args: GetSourceKlausApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKlausApiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceKlausApi:getSourceKlausApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceKlausApi.
 */
export interface GetSourceKlausApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
