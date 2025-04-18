// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationConvex(args: GetDestinationConvexArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationConvexResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationConvex:getDestinationConvex", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationConvex.
 */
export interface GetDestinationConvexArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationConvex.
 */
export interface GetDestinationConvexResult {
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
    readonly resourceAllocation: outputs.GetDestinationConvexResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationConvexOutput(args: GetDestinationConvexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationConvexResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationConvex:getDestinationConvex", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationConvex.
 */
export interface GetDestinationConvexOutputArgs {
    destinationId: pulumi.Input<string>;
}
