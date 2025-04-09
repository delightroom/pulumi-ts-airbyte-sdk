import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNebiusAi(args: GetSourceNebiusAiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNebiusAiResult>;
/**
 * A collection of arguments for invoking getSourceNebiusAi.
 */
export interface GetSourceNebiusAiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNebiusAi.
 */
export interface GetSourceNebiusAiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNebiusAiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNebiusAiOutput(args: GetSourceNebiusAiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNebiusAiResult>;
/**
 * A collection of arguments for invoking getSourceNebiusAi.
 */
export interface GetSourceNebiusAiOutputArgs {
    sourceId: pulumi.Input<string>;
}
