import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRingcentral(args: GetSourceRingcentralArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRingcentralResult>;
/**
 * A collection of arguments for invoking getSourceRingcentral.
 */
export interface GetSourceRingcentralArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRingcentral.
 */
export interface GetSourceRingcentralResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRingcentralResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRingcentralOutput(args: GetSourceRingcentralOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRingcentralResult>;
/**
 * A collection of arguments for invoking getSourceRingcentral.
 */
export interface GetSourceRingcentralOutputArgs {
    sourceId: pulumi.Input<string>;
}
