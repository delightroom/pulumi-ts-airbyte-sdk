import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFacebookPages(args: GetSourceFacebookPagesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFacebookPagesResult>;
/**
 * A collection of arguments for invoking getSourceFacebookPages.
 */
export interface GetSourceFacebookPagesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFacebookPages.
 */
export interface GetSourceFacebookPagesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFacebookPagesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFacebookPagesOutput(args: GetSourceFacebookPagesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFacebookPagesResult>;
/**
 * A collection of arguments for invoking getSourceFacebookPages.
 */
export interface GetSourceFacebookPagesOutputArgs {
    sourceId: pulumi.Input<string>;
}
