import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBlogger(args: GetSourceBloggerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBloggerResult>;
/**
 * A collection of arguments for invoking getSourceBlogger.
 */
export interface GetSourceBloggerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBlogger.
 */
export interface GetSourceBloggerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBloggerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBloggerOutput(args: GetSourceBloggerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBloggerResult>;
/**
 * A collection of arguments for invoking getSourceBlogger.
 */
export interface GetSourceBloggerOutputArgs {
    sourceId: pulumi.Input<string>;
}
