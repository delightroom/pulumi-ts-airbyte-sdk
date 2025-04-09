import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGithub(args: GetSourceGithubArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGithubResult>;
/**
 * A collection of arguments for invoking getSourceGithub.
 */
export interface GetSourceGithubArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGithub.
 */
export interface GetSourceGithubResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGithubResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGithubOutput(args: GetSourceGithubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGithubResult>;
/**
 * A collection of arguments for invoking getSourceGithub.
 */
export interface GetSourceGithubOutputArgs {
    sourceId: pulumi.Input<string>;
}
