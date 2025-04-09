import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTwelveData(args: GetSourceTwelveDataArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTwelveDataResult>;
/**
 * A collection of arguments for invoking getSourceTwelveData.
 */
export interface GetSourceTwelveDataArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTwelveData.
 */
export interface GetSourceTwelveDataResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTwelveDataResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTwelveDataOutput(args: GetSourceTwelveDataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTwelveDataResult>;
/**
 * A collection of arguments for invoking getSourceTwelveData.
 */
export interface GetSourceTwelveDataOutputArgs {
    sourceId: pulumi.Input<string>;
}
