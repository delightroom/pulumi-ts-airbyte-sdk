import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePolygonStockApi(args: GetSourcePolygonStockApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePolygonStockApiResult>;
/**
 * A collection of arguments for invoking getSourcePolygonStockApi.
 */
export interface GetSourcePolygonStockApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePolygonStockApi.
 */
export interface GetSourcePolygonStockApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePolygonStockApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePolygonStockApiOutput(args: GetSourcePolygonStockApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePolygonStockApiResult>;
/**
 * A collection of arguments for invoking getSourcePolygonStockApi.
 */
export interface GetSourcePolygonStockApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
