// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourceTodoist(args: GetSourceTodoistArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTodoistResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTodoist:getSourceTodoist", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTodoist.
 */
export interface GetSourceTodoistArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceTodoist.
 */
export interface GetSourceTodoistResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTodoistResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceTodoistOutput(args: GetSourceTodoistOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTodoistResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTodoist:getSourceTodoist", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceTodoist.
 */
export interface GetSourceTodoistOutputArgs {
    sourceId: pulumi.Input<string>;
}
