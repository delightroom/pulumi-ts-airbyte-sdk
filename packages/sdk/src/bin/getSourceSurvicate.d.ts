import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSurvicate(args: GetSourceSurvicateArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSurvicateResult>;
/**
 * A collection of arguments for invoking getSourceSurvicate.
 */
export interface GetSourceSurvicateArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSurvicate.
 */
export interface GetSourceSurvicateResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSurvicateResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSurvicateOutput(args: GetSourceSurvicateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSurvicateResult>;
/**
 * A collection of arguments for invoking getSourceSurvicate.
 */
export interface GetSourceSurvicateOutputArgs {
    sourceId: pulumi.Input<string>;
}
