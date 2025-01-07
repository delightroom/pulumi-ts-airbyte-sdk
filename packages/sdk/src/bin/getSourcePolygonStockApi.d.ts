import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
