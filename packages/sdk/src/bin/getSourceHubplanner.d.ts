import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHubplannerResourceAllocation;
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
