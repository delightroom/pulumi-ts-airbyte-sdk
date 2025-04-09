import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSalesflare(args: GetSourceSalesflareArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSalesflareResult>;
/**
 * A collection of arguments for invoking getSourceSalesflare.
 */
export interface GetSourceSalesflareArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSalesflare.
 */
export interface GetSourceSalesflareResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSalesflareResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSalesflareOutput(args: GetSourceSalesflareOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSalesflareResult>;
/**
 * A collection of arguments for invoking getSourceSalesflare.
 */
export interface GetSourceSalesflareOutputArgs {
    sourceId: pulumi.Input<string>;
}
