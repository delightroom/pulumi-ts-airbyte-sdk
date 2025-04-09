import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationGoogleSheets(args: GetDestinationGoogleSheetsArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationGoogleSheetsResult>;
/**
 * A collection of arguments for invoking getDestinationGoogleSheets.
 */
export interface GetDestinationGoogleSheetsArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationGoogleSheets.
 */
export interface GetDestinationGoogleSheetsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetDestinationGoogleSheetsResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationGoogleSheetsOutput(args: GetDestinationGoogleSheetsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationGoogleSheetsResult>;
/**
 * A collection of arguments for invoking getDestinationGoogleSheets.
 */
export interface GetDestinationGoogleSheetsOutputArgs {
    destinationId: pulumi.Input<string>;
}
