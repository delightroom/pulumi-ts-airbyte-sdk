import * as pulumi from "@pulumi/pulumi";
export declare function getSourceStripe(args: GetSourceStripeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceStripeResult>;
/**
 * A collection of arguments for invoking getSourceStripe.
 */
export interface GetSourceStripeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceStripe.
 */
export interface GetSourceStripeResult {
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
export declare function getSourceStripeOutput(args: GetSourceStripeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceStripeResult>;
/**
 * A collection of arguments for invoking getSourceStripe.
 */
export interface GetSourceStripeOutputArgs {
    sourceId: pulumi.Input<string>;
}
//# sourceMappingURL=getSourceStripe.d.ts.map