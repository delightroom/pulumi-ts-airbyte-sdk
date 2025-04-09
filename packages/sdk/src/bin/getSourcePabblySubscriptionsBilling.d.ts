import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePabblySubscriptionsBilling(args: GetSourcePabblySubscriptionsBillingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePabblySubscriptionsBillingResult>;
/**
 * A collection of arguments for invoking getSourcePabblySubscriptionsBilling.
 */
export interface GetSourcePabblySubscriptionsBillingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePabblySubscriptionsBilling.
 */
export interface GetSourcePabblySubscriptionsBillingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePabblySubscriptionsBillingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePabblySubscriptionsBillingOutput(args: GetSourcePabblySubscriptionsBillingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePabblySubscriptionsBillingResult>;
/**
 * A collection of arguments for invoking getSourcePabblySubscriptionsBilling.
 */
export interface GetSourcePabblySubscriptionsBillingOutputArgs {
    sourceId: pulumi.Input<string>;
}
