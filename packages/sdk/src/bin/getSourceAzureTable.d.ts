import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAzureTable(args: GetSourceAzureTableArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAzureTableResult>;
/**
 * A collection of arguments for invoking getSourceAzureTable.
 */
export interface GetSourceAzureTableArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAzureTable.
 */
export interface GetSourceAzureTableResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAzureTableResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAzureTableOutput(args: GetSourceAzureTableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAzureTableResult>;
/**
 * A collection of arguments for invoking getSourceAzureTable.
 */
export interface GetSourceAzureTableOutputArgs {
    sourceId: pulumi.Input<string>;
}
