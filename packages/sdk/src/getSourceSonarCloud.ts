// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceSonarCloud(args: GetSourceSonarCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSonarCloudResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSonarCloud:getSourceSonarCloud", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSonarCloud.
 */
export interface GetSourceSonarCloudArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSonarCloud.
 */
export interface GetSourceSonarCloudResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSonarCloudResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceSonarCloudOutput(args: GetSourceSonarCloudOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSonarCloudResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSonarCloud:getSourceSonarCloud", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSonarCloud.
 */
export interface GetSourceSonarCloudOutputArgs {
    sourceId: pulumi.Input<string>;
}
