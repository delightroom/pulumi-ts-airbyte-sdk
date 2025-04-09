import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWoocommerce(args: GetSourceWoocommerceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWoocommerceResult>;
/**
 * A collection of arguments for invoking getSourceWoocommerce.
 */
export interface GetSourceWoocommerceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWoocommerce.
 */
export interface GetSourceWoocommerceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWoocommerceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWoocommerceOutput(args: GetSourceWoocommerceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWoocommerceResult>;
/**
 * A collection of arguments for invoking getSourceWoocommerce.
 */
export interface GetSourceWoocommerceOutputArgs {
    sourceId: pulumi.Input<string>;
}
