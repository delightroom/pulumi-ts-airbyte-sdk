import * as pulumi from "@pulumi/pulumi";
export declare function getSourceHubplanner(args: GetSourceHubplannerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHubplannerResult>;
/**
 * A collection of arguments for invoking getSourceHubplanner.
 */
export interface GetSourceHubplannerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHubplanner.
 */
export interface GetSourceHubplannerResult {
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
export declare function getSourceHubplannerOutput(args: GetSourceHubplannerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHubplannerResult>;
/**
 * A collection of arguments for invoking getSourceHubplanner.
 */
export interface GetSourceHubplannerOutputArgs {
    sourceId: pulumi.Input<string>;
}
