// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceInvoiceninja(args: GetSourceInvoiceninjaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInvoiceninjaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceInvoiceninja:getSourceInvoiceninja", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceInvoiceninja.
 */
export interface GetSourceInvoiceninjaArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceInvoiceninja.
 */
export interface GetSourceInvoiceninjaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceInvoiceninjaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceInvoiceninjaOutput(args: GetSourceInvoiceninjaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInvoiceninjaResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceInvoiceninja:getSourceInvoiceninja", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceInvoiceninja.
 */
export interface GetSourceInvoiceninjaOutputArgs {
    sourceId: pulumi.Input<string>;
}
