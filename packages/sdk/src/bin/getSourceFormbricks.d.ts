import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFormbricks(args: GetSourceFormbricksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFormbricksResult>;
/**
 * A collection of arguments for invoking getSourceFormbricks.
 */
export interface GetSourceFormbricksArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFormbricks.
 */
export interface GetSourceFormbricksResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFormbricksResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFormbricksOutput(args: GetSourceFormbricksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFormbricksResult>;
/**
 * A collection of arguments for invoking getSourceFormbricks.
 */
export interface GetSourceFormbricksOutputArgs {
    sourceId: pulumi.Input<string>;
}
