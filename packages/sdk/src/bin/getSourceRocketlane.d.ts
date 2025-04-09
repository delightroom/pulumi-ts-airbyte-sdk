import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRocketlane(args: GetSourceRocketlaneArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRocketlaneResult>;
/**
 * A collection of arguments for invoking getSourceRocketlane.
 */
export interface GetSourceRocketlaneArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRocketlane.
 */
export interface GetSourceRocketlaneResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRocketlaneResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRocketlaneOutput(args: GetSourceRocketlaneOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRocketlaneResult>;
/**
 * A collection of arguments for invoking getSourceRocketlane.
 */
export interface GetSourceRocketlaneOutputArgs {
    sourceId: pulumi.Input<string>;
}
