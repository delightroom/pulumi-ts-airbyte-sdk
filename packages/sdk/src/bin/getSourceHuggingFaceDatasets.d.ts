import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHuggingFaceDatasets(args: GetSourceHuggingFaceDatasetsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHuggingFaceDatasetsResult>;
/**
 * A collection of arguments for invoking getSourceHuggingFaceDatasets.
 */
export interface GetSourceHuggingFaceDatasetsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHuggingFaceDatasets.
 */
export interface GetSourceHuggingFaceDatasetsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHuggingFaceDatasetsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHuggingFaceDatasetsOutput(args: GetSourceHuggingFaceDatasetsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHuggingFaceDatasetsResult>;
/**
 * A collection of arguments for invoking getSourceHuggingFaceDatasets.
 */
export interface GetSourceHuggingFaceDatasetsOutputArgs {
    sourceId: pulumi.Input<string>;
}
