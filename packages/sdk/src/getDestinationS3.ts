// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationS3(args: GetDestinationS3Args, opts?: pulumi.InvokeOptions): Promise<GetDestinationS3Result> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationS3:getDestinationS3", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationS3.
 */
export interface GetDestinationS3Args {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationS3.
 */
export interface GetDestinationS3Result {
    readonly configuration: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export function getDestinationS3Output(args: GetDestinationS3OutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationS3Result> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationS3:getDestinationS3", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationS3.
 */
export interface GetDestinationS3OutputArgs {
    destinationId: pulumi.Input<string>;
}
