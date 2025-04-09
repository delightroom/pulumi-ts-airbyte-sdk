import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOura(args: GetSourceOuraArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOuraResult>;
/**
 * A collection of arguments for invoking getSourceOura.
 */
export interface GetSourceOuraArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOura.
 */
export interface GetSourceOuraResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOuraResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOuraOutput(args: GetSourceOuraOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOuraResult>;
/**
 * A collection of arguments for invoking getSourceOura.
 */
export interface GetSourceOuraOutputArgs {
    sourceId: pulumi.Input<string>;
}
