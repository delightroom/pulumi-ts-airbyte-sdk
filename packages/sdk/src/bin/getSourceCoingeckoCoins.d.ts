import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCoingeckoCoins(args: GetSourceCoingeckoCoinsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCoingeckoCoinsResult>;
/**
 * A collection of arguments for invoking getSourceCoingeckoCoins.
 */
export interface GetSourceCoingeckoCoinsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCoingeckoCoins.
 */
export interface GetSourceCoingeckoCoinsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCoingeckoCoinsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCoingeckoCoinsOutput(args: GetSourceCoingeckoCoinsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCoingeckoCoinsResult>;
/**
 * A collection of arguments for invoking getSourceCoingeckoCoins.
 */
export interface GetSourceCoingeckoCoinsOutputArgs {
    sourceId: pulumi.Input<string>;
}
