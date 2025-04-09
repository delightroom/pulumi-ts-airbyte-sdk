import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAlphaVantage(args: GetSourceAlphaVantageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAlphaVantageResult>;
/**
 * A collection of arguments for invoking getSourceAlphaVantage.
 */
export interface GetSourceAlphaVantageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAlphaVantage.
 */
export interface GetSourceAlphaVantageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAlphaVantageResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAlphaVantageOutput(args: GetSourceAlphaVantageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAlphaVantageResult>;
/**
 * A collection of arguments for invoking getSourceAlphaVantage.
 */
export interface GetSourceAlphaVantageOutputArgs {
    sourceId: pulumi.Input<string>;
}
