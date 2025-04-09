import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceReddit(args: GetSourceRedditArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRedditResult>;
/**
 * A collection of arguments for invoking getSourceReddit.
 */
export interface GetSourceRedditArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceReddit.
 */
export interface GetSourceRedditResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRedditResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRedditOutput(args: GetSourceRedditOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRedditResult>;
/**
 * A collection of arguments for invoking getSourceReddit.
 */
export interface GetSourceRedditOutputArgs {
    sourceId: pulumi.Input<string>;
}
