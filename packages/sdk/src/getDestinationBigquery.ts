// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationBigquery(args: GetDestinationBigqueryArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationBigqueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationBigquery:getDestinationBigquery", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationBigquery.
 */
export interface GetDestinationBigqueryArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationBigquery.
 */
export interface GetDestinationBigqueryResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetDestinationBigqueryResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationBigqueryOutput(args: GetDestinationBigqueryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationBigqueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationBigquery:getDestinationBigquery", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationBigquery.
 */
export interface GetDestinationBigqueryOutputArgs {
    destinationId: pulumi.Input<string>;
}
