import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEasypromos(args: GetSourceEasypromosArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEasypromosResult>;
/**
 * A collection of arguments for invoking getSourceEasypromos.
 */
export interface GetSourceEasypromosArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEasypromos.
 */
export interface GetSourceEasypromosResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEasypromosResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEasypromosOutput(args: GetSourceEasypromosOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEasypromosResult>;
/**
 * A collection of arguments for invoking getSourceEasypromos.
 */
export interface GetSourceEasypromosOutputArgs {
    sourceId: pulumi.Input<string>;
}
