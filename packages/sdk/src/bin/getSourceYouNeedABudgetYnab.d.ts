import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceYouNeedABudgetYnab(args: GetSourceYouNeedABudgetYnabArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYouNeedABudgetYnabResult>;
/**
 * A collection of arguments for invoking getSourceYouNeedABudgetYnab.
 */
export interface GetSourceYouNeedABudgetYnabArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYouNeedABudgetYnab.
 */
export interface GetSourceYouNeedABudgetYnabResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYouNeedABudgetYnabResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceYouNeedABudgetYnabOutput(args: GetSourceYouNeedABudgetYnabOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYouNeedABudgetYnabResult>;
/**
 * A collection of arguments for invoking getSourceYouNeedABudgetYnab.
 */
export interface GetSourceYouNeedABudgetYnabOutputArgs {
    sourceId: pulumi.Input<string>;
}
