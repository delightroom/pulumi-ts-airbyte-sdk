// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationMongodb(args: GetDestinationMongodbArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationMongodbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationMongodb:getDestinationMongodb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationMongodb.
 */
export interface GetDestinationMongodbArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationMongodb.
 */
export interface GetDestinationMongodbResult {
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
export function getDestinationMongodbOutput(args: GetDestinationMongodbOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationMongodbResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationMongodb:getDestinationMongodb", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationMongodb.
 */
export interface GetDestinationMongodbOutputArgs {
    destinationId: pulumi.Input<string>;
}
