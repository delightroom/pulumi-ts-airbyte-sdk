import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceYahooFinancePrice(args: GetSourceYahooFinancePriceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYahooFinancePriceResult>;
/**
 * A collection of arguments for invoking getSourceYahooFinancePrice.
 */
export interface GetSourceYahooFinancePriceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYahooFinancePrice.
 */
export interface GetSourceYahooFinancePriceResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYahooFinancePriceResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceYahooFinancePriceOutput(args: GetSourceYahooFinancePriceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYahooFinancePriceResult>;
/**
 * A collection of arguments for invoking getSourceYahooFinancePrice.
 */
export interface GetSourceYahooFinancePriceOutputArgs {
    sourceId: pulumi.Input<string>;
}
