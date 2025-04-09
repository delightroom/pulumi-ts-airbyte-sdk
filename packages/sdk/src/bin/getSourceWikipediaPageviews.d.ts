import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWikipediaPageviews(args: GetSourceWikipediaPageviewsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWikipediaPageviewsResult>;
/**
 * A collection of arguments for invoking getSourceWikipediaPageviews.
 */
export interface GetSourceWikipediaPageviewsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWikipediaPageviews.
 */
export interface GetSourceWikipediaPageviewsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWikipediaPageviewsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWikipediaPageviewsOutput(args: GetSourceWikipediaPageviewsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWikipediaPageviewsResult>;
/**
 * A collection of arguments for invoking getSourceWikipediaPageviews.
 */
export interface GetSourceWikipediaPageviewsOutputArgs {
    sourceId: pulumi.Input<string>;
}
