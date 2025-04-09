import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEventee(args: GetSourceEventeeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEventeeResult>;
/**
 * A collection of arguments for invoking getSourceEventee.
 */
export interface GetSourceEventeeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEventee.
 */
export interface GetSourceEventeeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEventeeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEventeeOutput(args: GetSourceEventeeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEventeeResult>;
/**
 * A collection of arguments for invoking getSourceEventee.
 */
export interface GetSourceEventeeOutputArgs {
    sourceId: pulumi.Input<string>;
}
