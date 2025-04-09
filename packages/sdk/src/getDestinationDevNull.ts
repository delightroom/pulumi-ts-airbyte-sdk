// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationDevNull(args: GetDestinationDevNullArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDevNullResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationDevNull:getDestinationDevNull", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationDevNull.
 */
export interface GetDestinationDevNullArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationDevNull.
 */
export interface GetDestinationDevNullResult {
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
    readonly resourceAllocation: outputs.GetDestinationDevNullResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationDevNullOutput(args: GetDestinationDevNullOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDevNullResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationDevNull:getDestinationDevNull", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationDevNull.
 */
export interface GetDestinationDevNullOutputArgs {
    destinationId: pulumi.Input<string>;
}
