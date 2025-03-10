import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAmazonSellerPartner(args: GetSourceAmazonSellerPartnerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAmazonSellerPartnerResult>;
/**
 * A collection of arguments for invoking getSourceAmazonSellerPartner.
 */
export interface GetSourceAmazonSellerPartnerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAmazonSellerPartner.
 */
export interface GetSourceAmazonSellerPartnerResult {
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
export declare function getSourceAmazonSellerPartnerOutput(args: GetSourceAmazonSellerPartnerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAmazonSellerPartnerResult>;
/**
 * A collection of arguments for invoking getSourceAmazonSellerPartner.
 */
export interface GetSourceAmazonSellerPartnerOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceAmazonSellerPartner.d.ts.map