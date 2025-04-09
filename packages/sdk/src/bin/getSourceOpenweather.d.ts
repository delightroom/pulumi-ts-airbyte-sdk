import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOpenweather(args: GetSourceOpenweatherArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpenweatherResult>;
/**
 * A collection of arguments for invoking getSourceOpenweather.
 */
export interface GetSourceOpenweatherArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOpenweather.
 */
export interface GetSourceOpenweatherResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpenweatherResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOpenweatherOutput(args: GetSourceOpenweatherOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpenweatherResult>;
/**
 * A collection of arguments for invoking getSourceOpenweather.
 */
export interface GetSourceOpenweatherOutputArgs {
    sourceId: pulumi.Input<string>;
}
