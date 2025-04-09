import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceThinkific(args: GetSourceThinkificArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceThinkificResult>;
/**
 * A collection of arguments for invoking getSourceThinkific.
 */
export interface GetSourceThinkificArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceThinkific.
 */
export interface GetSourceThinkificResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceThinkificResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceThinkificOutput(args: GetSourceThinkificOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceThinkificResult>;
/**
 * A collection of arguments for invoking getSourceThinkific.
 */
export interface GetSourceThinkificOutputArgs {
    sourceId: pulumi.Input<string>;
}
