import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePrestashop(args: GetSourcePrestashopArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePrestashopResult>;
/**
 * A collection of arguments for invoking getSourcePrestashop.
 */
export interface GetSourcePrestashopArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePrestashop.
 */
export interface GetSourcePrestashopResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePrestashopResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePrestashopOutput(args: GetSourcePrestashopOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePrestashopResult>;
/**
 * A collection of arguments for invoking getSourcePrestashop.
 */
export interface GetSourcePrestashopOutputArgs {
    sourceId: pulumi.Input<string>;
}
