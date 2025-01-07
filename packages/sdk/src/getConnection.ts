// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getConnection(args: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getConnection:getConnection", {
        "connectionId": args.connectionId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionArgs {
    connectionId: string;
}

/**
 * A collection of values returned by getConnection.
 */
export interface GetConnectionResult {
    readonly configurations: outputs.GetConnectionConfigurations;
    readonly connectionId: string;
    readonly dataResidency: string;
    readonly destinationId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly namespaceDefinition: string;
    readonly namespaceFormat: string;
    readonly nonBreakingSchemaUpdatesBehavior: string;
    readonly prefix: string;
    readonly schedule: outputs.GetConnectionSchedule;
    readonly sourceId: string;
    readonly status: string;
    readonly workspaceId: string;
}
export function getConnectionOutput(args: GetConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getConnection:getConnection", {
        "connectionId": args.connectionId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionOutputArgs {
    connectionId: pulumi.Input<string>;
}
