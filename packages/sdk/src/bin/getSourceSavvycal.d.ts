import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSavvycal(args: GetSourceSavvycalArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSavvycalResult>;
/**
 * A collection of arguments for invoking getSourceSavvycal.
 */
export interface GetSourceSavvycalArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSavvycal.
 */
export interface GetSourceSavvycalResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSavvycalResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSavvycalOutput(args: GetSourceSavvycalOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSavvycalResult>;
/**
 * A collection of arguments for invoking getSourceSavvycal.
 */
export interface GetSourceSavvycalOutputArgs {
    sourceId: pulumi.Input<string>;
}
