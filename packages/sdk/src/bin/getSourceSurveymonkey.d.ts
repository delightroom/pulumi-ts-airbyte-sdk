import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSurveymonkey(args: GetSourceSurveymonkeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSurveymonkeyResult>;
/**
 * A collection of arguments for invoking getSourceSurveymonkey.
 */
export interface GetSourceSurveymonkeyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSurveymonkey.
 */
export interface GetSourceSurveymonkeyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSurveymonkeyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSurveymonkeyOutput(args: GetSourceSurveymonkeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSurveymonkeyResult>;
/**
 * A collection of arguments for invoking getSourceSurveymonkey.
 */
export interface GetSourceSurveymonkeyOutputArgs {
    sourceId: pulumi.Input<string>;
}
