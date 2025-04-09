// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationDuckdb(args: GetDestinationDuckdbArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDuckdbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationDuckdb:getDestinationDuckdb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationDuckdb.
 */
export interface GetDestinationDuckdbArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationDuckdb.
 */
export interface GetDestinationDuckdbResult {
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
    readonly resourceAllocation: outputs.GetDestinationDuckdbResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationDuckdbOutput(args: GetDestinationDuckdbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDuckdbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationDuckdb:getDestinationDuckdb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationDuckdb.
 */
export interface GetDestinationDuckdbOutputArgs {
    destinationId: pulumi.Input<string>;
}
