import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHeight(args: GetSourceHeightArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHeightResult>;
/**
 * A collection of arguments for invoking getSourceHeight.
 */
export interface GetSourceHeightArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHeight.
 */
export interface GetSourceHeightResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHeightResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHeightOutput(args: GetSourceHeightOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHeightResult>;
/**
 * A collection of arguments for invoking getSourceHeight.
 */
export interface GetSourceHeightOutputArgs {
    sourceId: pulumi.Input<string>;
}
