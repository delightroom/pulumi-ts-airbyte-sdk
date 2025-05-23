import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRailz(args: GetSourceRailzArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRailzResult>;
/**
 * A collection of arguments for invoking getSourceRailz.
 */
export interface GetSourceRailzArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRailz.
 */
export interface GetSourceRailzResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRailzResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRailzOutput(args: GetSourceRailzOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRailzResult>;
/**
 * A collection of arguments for invoking getSourceRailz.
 */
export interface GetSourceRailzOutputArgs {
    sourceId: pulumi.Input<string>;
}
