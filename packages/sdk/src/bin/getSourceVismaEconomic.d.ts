import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceVismaEconomic(args: GetSourceVismaEconomicArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceVismaEconomicResult>;
/**
 * A collection of arguments for invoking getSourceVismaEconomic.
 */
export interface GetSourceVismaEconomicArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceVismaEconomic.
 */
export interface GetSourceVismaEconomicResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceVismaEconomicResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceVismaEconomicOutput(args: GetSourceVismaEconomicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceVismaEconomicResult>;
/**
 * A collection of arguments for invoking getSourceVismaEconomic.
 */
export interface GetSourceVismaEconomicOutputArgs {
    sourceId: pulumi.Input<string>;
}
