import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
//# sourceMappingURL=getSourceMicrosoftTeams.d.ts.map