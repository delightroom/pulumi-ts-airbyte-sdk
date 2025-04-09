import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGnews(args: GetSourceGnewsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGnewsResult>;
/**
 * A collection of arguments for invoking getSourceGnews.
 */
export interface GetSourceGnewsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGnews.
 */
export interface GetSourceGnewsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGnewsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGnewsOutput(args: GetSourceGnewsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGnewsResult>;
/**
 * A collection of arguments for invoking getSourceGnews.
 */
export interface GetSourceGnewsOutputArgs {
    sourceId: pulumi.Input<string>;
}
