import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGoogleSearchConsole(args: GetSourceGoogleSearchConsoleArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGoogleSearchConsoleResult>;
/**
 * A collection of arguments for invoking getSourceGoogleSearchConsole.
 */
export interface GetSourceGoogleSearchConsoleArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGoogleSearchConsole.
 */
export interface GetSourceGoogleSearchConsoleResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGoogleSearchConsoleResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGoogleSearchConsoleOutput(args: GetSourceGoogleSearchConsoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGoogleSearchConsoleResult>;
/**
 * A collection of arguments for invoking getSourceGoogleSearchConsole.
 */
export interface GetSourceGoogleSearchConsoleOutputArgs {
    sourceId: pulumi.Input<string>;
}
