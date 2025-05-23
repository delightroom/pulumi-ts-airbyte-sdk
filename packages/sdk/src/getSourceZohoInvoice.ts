// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceZohoInvoice(args: GetSourceZohoInvoiceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoInvoiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZohoInvoice:getSourceZohoInvoice", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZohoInvoice.
 */
export interface GetSourceZohoInvoiceArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceZohoInvoice.
 */
export interface GetSourceZohoInvoiceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoInvoiceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceZohoInvoiceOutput(args: GetSourceZohoInvoiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoInvoiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZohoInvoice:getSourceZohoInvoice", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceZohoInvoice.
 */
export interface GetSourceZohoInvoiceOutputArgs {
    sourceId: pulumi.Input<string>;
}
