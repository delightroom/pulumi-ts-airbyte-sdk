// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceUservoice(args: GetSourceUservoiceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceUservoiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceUservoice:getSourceUservoice", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceUservoice.
 */
export interface GetSourceUservoiceArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceUservoice.
 */
export interface GetSourceUservoiceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceUservoiceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceUservoiceOutput(args: GetSourceUservoiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceUservoiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceUservoice:getSourceUservoice", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceUservoice.
 */
export interface GetSourceUservoiceOutputArgs {
    sourceId: pulumi.Input<string>;
}
