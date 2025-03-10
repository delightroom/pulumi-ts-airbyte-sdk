import * as pulumi from "@pulumi/pulumi";
export declare function getSourceWoocommerce(args: GetSourceWoocommerceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWoocommerceResult>;
/**
 * A collection of arguments for invoking getSourceWoocommerce.
 */
export interface GetSourceWoocommerceArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWoocommerce.
 */
export interface GetSourceWoocommerceResult {
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
export declare function getSourceWoocommerceOutput(args: GetSourceWoocommerceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWoocommerceResult>;
/**
 * A collection of arguments for invoking getSourceWoocommerce.
 */
export interface GetSourceWoocommerceOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceWoocommerce.d.ts.map