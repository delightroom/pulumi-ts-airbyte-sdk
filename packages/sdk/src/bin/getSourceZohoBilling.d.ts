import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoBilling(args: GetSourceZohoBillingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoBillingResult>;
/**
 * A collection of arguments for invoking getSourceZohoBilling.
 */
export interface GetSourceZohoBillingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoBilling.
 */
export interface GetSourceZohoBillingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoBillingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoBillingOutput(args: GetSourceZohoBillingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoBillingResult>;
/**
 * A collection of arguments for invoking getSourceZohoBilling.
 */
export interface GetSourceZohoBillingOutputArgs {
    sourceId: pulumi.Input<string>;
}
