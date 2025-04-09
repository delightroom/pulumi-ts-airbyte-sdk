import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOpinionStage(args: GetSourceOpinionStageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpinionStageResult>;
/**
 * A collection of arguments for invoking getSourceOpinionStage.
 */
export interface GetSourceOpinionStageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOpinionStage.
 */
export interface GetSourceOpinionStageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpinionStageResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOpinionStageOutput(args: GetSourceOpinionStageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpinionStageResult>;
/**
 * A collection of arguments for invoking getSourceOpinionStage.
 */
export interface GetSourceOpinionStageOutputArgs {
    sourceId: pulumi.Input<string>;
}
