// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDestinationWeaviate(args: GetDestinationWeaviateArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationWeaviateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationWeaviate:getDestinationWeaviate", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationWeaviate.
 */
export interface GetDestinationWeaviateArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationWeaviate.
 */
export interface GetDestinationWeaviateResult {
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
    readonly resourceAllocation: outputs.GetDestinationWeaviateResourceAllocation;
    readonly workspaceId: string;
}
export function getDestinationWeaviateOutput(args: GetDestinationWeaviateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationWeaviateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationWeaviate:getDestinationWeaviate", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationWeaviate.
 */
export interface GetDestinationWeaviateOutputArgs {
    destinationId: pulumi.Input<string>;
}
