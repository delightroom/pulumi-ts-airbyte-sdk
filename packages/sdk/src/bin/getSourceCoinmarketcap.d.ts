import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCoinmarketcap(args: GetSourceCoinmarketcapArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCoinmarketcapResult>;
/**
 * A collection of arguments for invoking getSourceCoinmarketcap.
 */
export interface GetSourceCoinmarketcapArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCoinmarketcap.
 */
export interface GetSourceCoinmarketcapResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCoinmarketcapResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCoinmarketcapOutput(args: GetSourceCoinmarketcapOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCoinmarketcapResult>;
/**
 * A collection of arguments for invoking getSourceCoinmarketcap.
 */
export interface GetSourceCoinmarketcapOutputArgs {
    sourceId: pulumi.Input<string>;
}
