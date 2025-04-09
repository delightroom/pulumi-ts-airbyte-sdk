import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFinancialModelling(args: GetSourceFinancialModellingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFinancialModellingResult>;
/**
 * A collection of arguments for invoking getSourceFinancialModelling.
 */
export interface GetSourceFinancialModellingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFinancialModelling.
 */
export interface GetSourceFinancialModellingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFinancialModellingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFinancialModellingOutput(args: GetSourceFinancialModellingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFinancialModellingResult>;
/**
 * A collection of arguments for invoking getSourceFinancialModelling.
 */
export interface GetSourceFinancialModellingOutputArgs {
    sourceId: pulumi.Input<string>;
}
