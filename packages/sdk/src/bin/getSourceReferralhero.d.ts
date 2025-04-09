import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceReferralhero(args: GetSourceReferralheroArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceReferralheroResult>;
/**
 * A collection of arguments for invoking getSourceReferralhero.
 */
export interface GetSourceReferralheroArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceReferralhero.
 */
export interface GetSourceReferralheroResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceReferralheroResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceReferralheroOutput(args: GetSourceReferralheroOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceReferralheroResult>;
/**
 * A collection of arguments for invoking getSourceReferralhero.
 */
export interface GetSourceReferralheroOutputArgs {
    sourceId: pulumi.Input<string>;
}
