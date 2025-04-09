import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoInventory(args: GetSourceZohoInventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoInventoryResult>;
/**
 * A collection of arguments for invoking getSourceZohoInventory.
 */
export interface GetSourceZohoInventoryArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoInventory.
 */
export interface GetSourceZohoInventoryResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoInventoryResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoInventoryOutput(args: GetSourceZohoInventoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoInventoryResult>;
/**
 * A collection of arguments for invoking getSourceZohoInventory.
 */
export interface GetSourceZohoInventoryOutputArgs {
    sourceId: pulumi.Input<string>;
}
