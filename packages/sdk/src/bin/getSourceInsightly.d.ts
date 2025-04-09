import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceInsightly(args: GetSourceInsightlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInsightlyResult>;
/**
 * A collection of arguments for invoking getSourceInsightly.
 */
export interface GetSourceInsightlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInsightly.
 */
export interface GetSourceInsightlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceInsightlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceInsightlyOutput(args: GetSourceInsightlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInsightlyResult>;
/**
 * A collection of arguments for invoking getSourceInsightly.
 */
export interface GetSourceInsightlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
