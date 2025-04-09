import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRecharge(args: GetSourceRechargeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRechargeResult>;
/**
 * A collection of arguments for invoking getSourceRecharge.
 */
export interface GetSourceRechargeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRecharge.
 */
export interface GetSourceRechargeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRechargeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRechargeOutput(args: GetSourceRechargeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRechargeResult>;
/**
 * A collection of arguments for invoking getSourceRecharge.
 */
export interface GetSourceRechargeOutputArgs {
    sourceId: pulumi.Input<string>;
}
