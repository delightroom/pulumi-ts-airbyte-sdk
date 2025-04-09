import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMicrosoftTeams(args: GetSourceMicrosoftTeamsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMicrosoftTeamsResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftTeams.
 */
export interface GetSourceMicrosoftTeamsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMicrosoftTeams.
 */
export interface GetSourceMicrosoftTeamsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMicrosoftTeamsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMicrosoftTeamsOutput(args: GetSourceMicrosoftTeamsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMicrosoftTeamsResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftTeams.
 */
export interface GetSourceMicrosoftTeamsOutputArgs {
    sourceId: pulumi.Input<string>;
}
