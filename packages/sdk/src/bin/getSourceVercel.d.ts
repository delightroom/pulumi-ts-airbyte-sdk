import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceVercel(args: GetSourceVercelArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceVercelResult>;
/**
 * A collection of arguments for invoking getSourceVercel.
 */
export interface GetSourceVercelArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceVercel.
 */
export interface GetSourceVercelResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceVercelResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceVercelOutput(args: GetSourceVercelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceVercelResult>;
/**
 * A collection of arguments for invoking getSourceVercel.
 */
export interface GetSourceVercelOutputArgs {
    sourceId: pulumi.Input<string>;
}
