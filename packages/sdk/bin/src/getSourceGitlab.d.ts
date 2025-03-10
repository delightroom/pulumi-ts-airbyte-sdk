import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
//# sourceMappingURL=getSourceGitlab.d.ts.map