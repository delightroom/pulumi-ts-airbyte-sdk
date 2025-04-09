import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTeamtailor(args: GetSourceTeamtailorArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTeamtailorResult>;
/**
 * A collection of arguments for invoking getSourceTeamtailor.
 */
export interface GetSourceTeamtailorArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTeamtailor.
 */
export interface GetSourceTeamtailorResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTeamtailorResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTeamtailorOutput(args: GetSourceTeamtailorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTeamtailorResult>;
/**
 * A collection of arguments for invoking getSourceTeamtailor.
 */
export interface GetSourceTeamtailorOutputArgs {
    sourceId: pulumi.Input<string>;
}
