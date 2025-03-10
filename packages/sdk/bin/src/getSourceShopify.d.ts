import * as pulumi from "@pulumi/pulumi";
export declare function getSourceShopify(args: GetSourceShopifyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceShopifyResult>;
/**
 * A collection of arguments for invoking getSourceShopify.
 */
export interface GetSourceShopifyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceShopify.
 */
export interface GetSourceShopifyResult {
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
export declare function getSourceShopifyOutput(args: GetSourceShopifyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceShopifyResult>;
/**
 * A collection of arguments for invoking getSourceShopify.
 */
export interface GetSourceShopifyOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceShopify.d.ts.map