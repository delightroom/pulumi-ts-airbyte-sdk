import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRootly(args: GetSourceRootlyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRootlyResult>;
/**
 * A collection of arguments for invoking getSourceRootly.
 */
export interface GetSourceRootlyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRootly.
 */
export interface GetSourceRootlyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRootlyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRootlyOutput(args: GetSourceRootlyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRootlyResult>;
/**
 * A collection of arguments for invoking getSourceRootly.
 */
export interface GetSourceRootlyOutputArgs {
    sourceId: pulumi.Input<string>;
}
