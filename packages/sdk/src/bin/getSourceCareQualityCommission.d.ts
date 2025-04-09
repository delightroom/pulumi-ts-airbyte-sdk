import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCareQualityCommission(args: GetSourceCareQualityCommissionArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCareQualityCommissionResult>;
/**
 * A collection of arguments for invoking getSourceCareQualityCommission.
 */
export interface GetSourceCareQualityCommissionArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCareQualityCommission.
 */
export interface GetSourceCareQualityCommissionResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCareQualityCommissionResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCareQualityCommissionOutput(args: GetSourceCareQualityCommissionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCareQualityCommissionResult>;
/**
 * A collection of arguments for invoking getSourceCareQualityCommission.
 */
export interface GetSourceCareQualityCommissionOutputArgs {
    sourceId: pulumi.Input<string>;
}
