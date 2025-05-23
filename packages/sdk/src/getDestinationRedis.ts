// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationRedis(args: GetDestinationRedisArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationRedisResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationRedis:getDestinationRedis", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationRedis.
 */
export interface GetDestinationRedisArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationRedis.
 */
export interface GetDestinationRedisResult {
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
    readonly resourceAllocation: outputs.GetDestinationRedisResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationRedisOutput(args: GetDestinationRedisOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationRedisResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationRedis:getDestinationRedis", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationRedis.
 */
export interface GetDestinationRedisOutputArgs {
    destinationId: pulumi.Input<string>;
}
