import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRevolutMerchant(args: GetSourceRevolutMerchantArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRevolutMerchantResult>;
/**
 * A collection of arguments for invoking getSourceRevolutMerchant.
 */
export interface GetSourceRevolutMerchantArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRevolutMerchant.
 */
export interface GetSourceRevolutMerchantResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRevolutMerchantResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRevolutMerchantOutput(args: GetSourceRevolutMerchantOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRevolutMerchantResult>;
/**
 * A collection of arguments for invoking getSourceRevolutMerchant.
 */
export interface GetSourceRevolutMerchantOutputArgs {
    sourceId: pulumi.Input<string>;
}
