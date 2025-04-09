import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZonkaFeedback(args: GetSourceZonkaFeedbackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZonkaFeedbackResult>;
/**
 * A collection of arguments for invoking getSourceZonkaFeedback.
 */
export interface GetSourceZonkaFeedbackArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZonkaFeedback.
 */
export interface GetSourceZonkaFeedbackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZonkaFeedbackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZonkaFeedbackOutput(args: GetSourceZonkaFeedbackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZonkaFeedbackResult>;
/**
 * A collection of arguments for invoking getSourceZonkaFeedback.
 */
export interface GetSourceZonkaFeedbackOutputArgs {
    sourceId: pulumi.Input<string>;
}
