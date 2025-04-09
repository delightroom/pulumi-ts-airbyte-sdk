import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePivotalTracker(args: GetSourcePivotalTrackerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePivotalTrackerResult>;
/**
 * A collection of arguments for invoking getSourcePivotalTracker.
 */
export interface GetSourcePivotalTrackerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePivotalTracker.
 */
export interface GetSourcePivotalTrackerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePivotalTrackerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePivotalTrackerOutput(args: GetSourcePivotalTrackerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePivotalTrackerResult>;
/**
 * A collection of arguments for invoking getSourcePivotalTracker.
 */
export interface GetSourcePivotalTrackerOutputArgs {
    sourceId: pulumi.Input<string>;
}
