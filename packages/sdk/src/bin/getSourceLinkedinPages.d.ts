import * as pulumi from "@pulumi/pulumi";
export declare function getSourceLinkedinPages(args: GetSourceLinkedinPagesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLinkedinPagesResult>;
/**
 * A collection of arguments for invoking getSourceLinkedinPages.
 */
export interface GetSourceLinkedinPagesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLinkedinPages.
 */
export interface GetSourceLinkedinPagesResult {
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
export declare function getSourceLinkedinPagesOutput(args: GetSourceLinkedinPagesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLinkedinPagesResult>;
/**
 * A collection of arguments for invoking getSourceLinkedinPages.
 */
export interface GetSourceLinkedinPagesOutputArgs {
    sourceId: pulumi.Input<string>;
}
