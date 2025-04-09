import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGetlago(args: GetSourceGetlagoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGetlagoResult>;
/**
 * A collection of arguments for invoking getSourceGetlago.
 */
export interface GetSourceGetlagoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGetlago.
 */
export interface GetSourceGetlagoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGetlagoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGetlagoOutput(args: GetSourceGetlagoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGetlagoResult>;
/**
 * A collection of arguments for invoking getSourceGetlago.
 */
export interface GetSourceGetlagoOutputArgs {
    sourceId: pulumi.Input<string>;
}
