import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSageHr(args: GetSourceSageHrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSageHrResult>;
/**
 * A collection of arguments for invoking getSourceSageHr.
 */
export interface GetSourceSageHrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSageHr.
 */
export interface GetSourceSageHrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSageHrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSageHrOutput(args: GetSourceSageHrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSageHrResult>;
/**
 * A collection of arguments for invoking getSourceSageHr.
 */
export interface GetSourceSageHrOutputArgs {
    sourceId: pulumi.Input<string>;
}
