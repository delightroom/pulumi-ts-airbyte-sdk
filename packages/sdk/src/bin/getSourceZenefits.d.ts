import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZenefits(args: GetSourceZenefitsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZenefitsResult>;
/**
 * A collection of arguments for invoking getSourceZenefits.
 */
export interface GetSourceZenefitsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZenefits.
 */
export interface GetSourceZenefitsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZenefitsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZenefitsOutput(args: GetSourceZenefitsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZenefitsResult>;
/**
 * A collection of arguments for invoking getSourceZenefits.
 */
export interface GetSourceZenefitsOutputArgs {
    sourceId: pulumi.Input<string>;
}
