import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGoogleSheets(args: GetSourceGoogleSheetsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleSheetsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleSheets.
 */
export interface GetSourceGoogleSheetsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleSheets.
 */
export interface GetSourceGoogleSheetsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleSheetsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGoogleSheetsOutput(args: GetSourceGoogleSheetsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleSheetsResult>;
/**
 * A collection of arguments for invoking getSourceGoogleSheets.
 */
export interface GetSourceGoogleSheetsOutputArgs {
    sourceId: pulumi.Input<string>;
}
