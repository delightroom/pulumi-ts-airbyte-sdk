import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDocuseal(args: GetSourceDocusealArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDocusealResult>;
/**
 * A collection of arguments for invoking getSourceDocuseal.
 */
export interface GetSourceDocusealArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDocuseal.
 */
export interface GetSourceDocusealResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDocusealResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDocusealOutput(args: GetSourceDocusealOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDocusealResult>;
/**
 * A collection of arguments for invoking getSourceDocuseal.
 */
export interface GetSourceDocusealOutputArgs {
    sourceId: pulumi.Input<string>;
}
