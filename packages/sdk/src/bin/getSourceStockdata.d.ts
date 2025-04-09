import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceStockdata(args: GetSourceStockdataArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceStockdataResult>;
/**
 * A collection of arguments for invoking getSourceStockdata.
 */
export interface GetSourceStockdataArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceStockdata.
 */
export interface GetSourceStockdataResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceStockdataResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceStockdataOutput(args: GetSourceStockdataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceStockdataResult>;
/**
 * A collection of arguments for invoking getSourceStockdata.
 */
export interface GetSourceStockdataOutputArgs {
    sourceId: pulumi.Input<string>;
}
