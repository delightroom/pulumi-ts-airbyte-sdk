import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceLokalise(args: GetSourceLokaliseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLokaliseResult>;
/**
 * A collection of arguments for invoking getSourceLokalise.
 */
export interface GetSourceLokaliseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLokalise.
 */
export interface GetSourceLokaliseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLokaliseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLokaliseOutput(args: GetSourceLokaliseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLokaliseResult>;
/**
 * A collection of arguments for invoking getSourceLokalise.
 */
export interface GetSourceLokaliseOutputArgs {
    sourceId: pulumi.Input<string>;
}
