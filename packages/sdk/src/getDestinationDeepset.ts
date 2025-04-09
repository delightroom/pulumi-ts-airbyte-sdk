// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationDeepset(args: GetDestinationDeepsetArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationDeepsetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationDeepset:getDestinationDeepset", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationDeepset.
 */
export interface GetDestinationDeepsetArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationDeepset.
 */
export interface GetDestinationDeepsetResult {
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
    readonly resourceAllocation: outputs.GetDestinationDeepsetResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationDeepsetOutput(args: GetDestinationDeepsetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationDeepsetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationDeepset:getDestinationDeepset", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationDeepset.
 */
export interface GetDestinationDeepsetOutputArgs {
    destinationId: pulumi.Input<string>;
}
