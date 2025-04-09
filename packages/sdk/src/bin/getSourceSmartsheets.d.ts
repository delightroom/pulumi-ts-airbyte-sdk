import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSmartsheets(args: GetSourceSmartsheetsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSmartsheetsResult>;
/**
 * A collection of arguments for invoking getSourceSmartsheets.
 */
export interface GetSourceSmartsheetsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSmartsheets.
 */
export interface GetSourceSmartsheetsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSmartsheetsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSmartsheetsOutput(args: GetSourceSmartsheetsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSmartsheetsResult>;
/**
 * A collection of arguments for invoking getSourceSmartsheets.
 */
export interface GetSourceSmartsheetsOutputArgs {
    sourceId: pulumi.Input<string>;
}
