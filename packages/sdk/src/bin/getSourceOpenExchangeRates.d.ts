import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOpenExchangeRates(args: GetSourceOpenExchangeRatesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpenExchangeRatesResult>;
/**
 * A collection of arguments for invoking getSourceOpenExchangeRates.
 */
export interface GetSourceOpenExchangeRatesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOpenExchangeRates.
 */
export interface GetSourceOpenExchangeRatesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpenExchangeRatesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOpenExchangeRatesOutput(args: GetSourceOpenExchangeRatesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpenExchangeRatesResult>;
/**
 * A collection of arguments for invoking getSourceOpenExchangeRates.
 */
export interface GetSourceOpenExchangeRatesOutputArgs {
    sourceId: pulumi.Input<string>;
}
