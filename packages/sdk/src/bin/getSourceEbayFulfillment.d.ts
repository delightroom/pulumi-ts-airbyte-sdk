import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEbayFulfillment(args: GetSourceEbayFulfillmentArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEbayFulfillmentResult>;
/**
 * A collection of arguments for invoking getSourceEbayFulfillment.
 */
export interface GetSourceEbayFulfillmentArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEbayFulfillment.
 */
export interface GetSourceEbayFulfillmentResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEbayFulfillmentResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEbayFulfillmentOutput(args: GetSourceEbayFulfillmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEbayFulfillmentResult>;
/**
 * A collection of arguments for invoking getSourceEbayFulfillment.
 */
export interface GetSourceEbayFulfillmentOutputArgs {
    sourceId: pulumi.Input<string>;
}
