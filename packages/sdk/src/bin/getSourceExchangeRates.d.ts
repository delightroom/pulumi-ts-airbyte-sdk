import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceExchangeRates(args: GetSourceExchangeRatesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceExchangeRatesResult>;
/**
 * A collection of arguments for invoking getSourceExchangeRates.
 */
export interface GetSourceExchangeRatesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceExchangeRates.
 */
export interface GetSourceExchangeRatesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceExchangeRatesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceExchangeRatesOutput(args: GetSourceExchangeRatesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceExchangeRatesResult>;
/**
 * A collection of arguments for invoking getSourceExchangeRates.
 */
export interface GetSourceExchangeRatesOutputArgs {
    sourceId: pulumi.Input<string>;
}
