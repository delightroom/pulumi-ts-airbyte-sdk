import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceThriveLearning(args: GetSourceThriveLearningArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceThriveLearningResult>;
/**
 * A collection of arguments for invoking getSourceThriveLearning.
 */
export interface GetSourceThriveLearningArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceThriveLearning.
 */
export interface GetSourceThriveLearningResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceThriveLearningResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceThriveLearningOutput(args: GetSourceThriveLearningOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceThriveLearningResult>;
/**
 * A collection of arguments for invoking getSourceThriveLearning.
 */
export interface GetSourceThriveLearningOutputArgs {
    sourceId: pulumi.Input<string>;
}
