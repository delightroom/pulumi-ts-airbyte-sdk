import * as pulumi from "@pulumi/pulumi";
export declare function getSourceJira(args: GetSourceJiraArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJiraResult>;
/**
 * A collection of arguments for invoking getSourceJira.
 */
export interface GetSourceJiraArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceJira.
 */
export interface GetSourceJiraResult {
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
export declare function getSourceJiraOutput(args: GetSourceJiraOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJiraResult>;
/**
 * A collection of arguments for invoking getSourceJira.
 */
export interface GetSourceJiraOutputArgs {
    sourceId: pulumi.Input<string>;
}
