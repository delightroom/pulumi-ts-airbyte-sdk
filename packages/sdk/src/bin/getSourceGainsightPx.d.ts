import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGainsightPx(args: GetSourceGainsightPxArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGainsightPxResult>;
/**
 * A collection of arguments for invoking getSourceGainsightPx.
 */
export interface GetSourceGainsightPxArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGainsightPx.
 */
export interface GetSourceGainsightPxResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGainsightPxResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGainsightPxOutput(args: GetSourceGainsightPxOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGainsightPxResult>;
/**
 * A collection of arguments for invoking getSourceGainsightPx.
 */
export interface GetSourceGainsightPxOutputArgs {
    sourceId: pulumi.Input<string>;
}
