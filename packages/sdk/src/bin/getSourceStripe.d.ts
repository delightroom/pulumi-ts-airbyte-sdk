import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
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
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceStripeResourceAllocation;
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
