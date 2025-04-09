import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBuildkite(args: GetSourceBuildkiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBuildkiteResult>;
/**
 * A collection of arguments for invoking getSourceBuildkite.
 */
export interface GetSourceBuildkiteArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBuildkite.
 */
export interface GetSourceBuildkiteResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBuildkiteResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBuildkiteOutput(args: GetSourceBuildkiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBuildkiteResult>;
/**
 * A collection of arguments for invoking getSourceBuildkite.
 */
export interface GetSourceBuildkiteOutputArgs {
    sourceId: pulumi.Input<string>;
}
