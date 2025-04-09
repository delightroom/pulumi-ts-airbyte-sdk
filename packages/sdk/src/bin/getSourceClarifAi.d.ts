import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceClarifAi(args: GetSourceClarifAiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClarifAiResult>;
/**
 * A collection of arguments for invoking getSourceClarifAi.
 */
export interface GetSourceClarifAiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClarifAi.
 */
export interface GetSourceClarifAiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceClarifAiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceClarifAiOutput(args: GetSourceClarifAiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClarifAiResult>;
/**
 * A collection of arguments for invoking getSourceClarifAi.
 */
export interface GetSourceClarifAiOutputArgs {
    sourceId: pulumi.Input<string>;
}
