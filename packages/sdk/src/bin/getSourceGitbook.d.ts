import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGitbook(args: GetSourceGitbookArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGitbookResult>;
/**
 * A collection of arguments for invoking getSourceGitbook.
 */
export interface GetSourceGitbookArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGitbook.
 */
export interface GetSourceGitbookResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGitbookResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGitbookOutput(args: GetSourceGitbookOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGitbookResult>;
/**
 * A collection of arguments for invoking getSourceGitbook.
 */
export interface GetSourceGitbookOutputArgs {
    sourceId: pulumi.Input<string>;
}
