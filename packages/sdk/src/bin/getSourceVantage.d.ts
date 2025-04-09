import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceVantage(args: GetSourceVantageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceVantageResult>;
/**
 * A collection of arguments for invoking getSourceVantage.
 */
export interface GetSourceVantageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceVantage.
 */
export interface GetSourceVantageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceVantageResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceVantageOutput(args: GetSourceVantageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceVantageResult>;
/**
 * A collection of arguments for invoking getSourceVantage.
 */
export interface GetSourceVantageOutputArgs {
    sourceId: pulumi.Input<string>;
}
