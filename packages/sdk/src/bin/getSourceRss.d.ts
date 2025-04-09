import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRss(args: GetSourceRssArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRssResult>;
/**
 * A collection of arguments for invoking getSourceRss.
 */
export interface GetSourceRssArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRss.
 */
export interface GetSourceRssResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRssResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRssOutput(args: GetSourceRssOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRssResult>;
/**
 * A collection of arguments for invoking getSourceRss.
 */
export interface GetSourceRssOutputArgs {
    sourceId: pulumi.Input<string>;
}
