import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMicrosoftLists(args: GetSourceMicrosoftListsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMicrosoftListsResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftLists.
 */
export interface GetSourceMicrosoftListsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMicrosoftLists.
 */
export interface GetSourceMicrosoftListsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMicrosoftListsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMicrosoftListsOutput(args: GetSourceMicrosoftListsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMicrosoftListsResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftLists.
 */
export interface GetSourceMicrosoftListsOutputArgs {
    sourceId: pulumi.Input<string>;
}
