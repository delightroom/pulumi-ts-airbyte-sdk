import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHelpScout(args: GetSourceHelpScoutArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHelpScoutResult>;
/**
 * A collection of arguments for invoking getSourceHelpScout.
 */
export interface GetSourceHelpScoutArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHelpScout.
 */
export interface GetSourceHelpScoutResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHelpScoutResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHelpScoutOutput(args: GetSourceHelpScoutOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHelpScoutResult>;
/**
 * A collection of arguments for invoking getSourceHelpScout.
 */
export interface GetSourceHelpScoutOutputArgs {
    sourceId: pulumi.Input<string>;
}
