// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationSnowflake(args: GetDestinationSnowflakeArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationSnowflakeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationSnowflake:getDestinationSnowflake", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeResult {
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
    readonly resourceAllocation: outputs.GetDestinationSnowflakeResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationSnowflakeOutput(args: GetDestinationSnowflakeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationSnowflakeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationSnowflake:getDestinationSnowflake", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeOutputArgs {
    destinationId: pulumi.Input<string>;
}
