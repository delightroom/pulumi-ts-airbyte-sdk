import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
