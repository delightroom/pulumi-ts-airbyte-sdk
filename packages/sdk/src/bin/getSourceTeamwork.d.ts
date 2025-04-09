import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTeamwork(args: GetSourceTeamworkArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTeamworkResult>;
/**
 * A collection of arguments for invoking getSourceTeamwork.
 */
export interface GetSourceTeamworkArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTeamwork.
 */
export interface GetSourceTeamworkResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTeamworkResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTeamworkOutput(args: GetSourceTeamworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTeamworkResult>;
/**
 * A collection of arguments for invoking getSourceTeamwork.
 */
export interface GetSourceTeamworkOutputArgs {
    sourceId: pulumi.Input<string>;
}
