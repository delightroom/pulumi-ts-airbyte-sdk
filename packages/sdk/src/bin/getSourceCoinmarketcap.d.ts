import * as pulumi from "@pulumi/pulumi";
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
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
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
