import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceLessAnnoyingCrm(args: GetSourceLessAnnoyingCrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLessAnnoyingCrmResult>;
/**
 * A collection of arguments for invoking getSourceLessAnnoyingCrm.
 */
export interface GetSourceLessAnnoyingCrmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLessAnnoyingCrm.
 */
export interface GetSourceLessAnnoyingCrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLessAnnoyingCrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLessAnnoyingCrmOutput(args: GetSourceLessAnnoyingCrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLessAnnoyingCrmResult>;
/**
 * A collection of arguments for invoking getSourceLessAnnoyingCrm.
 */
export interface GetSourceLessAnnoyingCrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
