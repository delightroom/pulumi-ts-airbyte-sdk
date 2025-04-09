import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGitlab(args: GetSourceGitlabArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGitlabResult>;
/**
 * A collection of arguments for invoking getSourceGitlab.
 */
export interface GetSourceGitlabArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGitlab.
 */
export interface GetSourceGitlabResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGitlabResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGitlabOutput(args: GetSourceGitlabOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGitlabResult>;
/**
 * A collection of arguments for invoking getSourceGitlab.
 */
export interface GetSourceGitlabOutputArgs {
    sourceId: pulumi.Input<string>;
}
