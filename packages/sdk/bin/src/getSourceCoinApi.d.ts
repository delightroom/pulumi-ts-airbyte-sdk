import * as pulumi from "@pulumi/pulumi";
export declare function getSourceCoinApi(args: GetSourceCoinApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCoinApiResult>;
/**
 * A collection of arguments for invoking getSourceCoinApi.
 */
export interface GetSourceCoinApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCoinApi.
 */
export interface GetSourceCoinApiResult {
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
export declare function getSourceCoinApiOutput(args: GetSourceCoinApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCoinApiResult>;
/**
 * A collection of arguments for invoking getSourceCoinApi.
 */
export interface GetSourceCoinApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceCoinApi.d.ts.map