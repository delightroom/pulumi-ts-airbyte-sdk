import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWasabiStatsApi(args: GetSourceWasabiStatsApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWasabiStatsApiResult>;
/**
 * A collection of arguments for invoking getSourceWasabiStatsApi.
 */
export interface GetSourceWasabiStatsApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWasabiStatsApi.
 */
export interface GetSourceWasabiStatsApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWasabiStatsApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWasabiStatsApiOutput(args: GetSourceWasabiStatsApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWasabiStatsApiResult>;
/**
 * A collection of arguments for invoking getSourceWasabiStatsApi.
 */
export interface GetSourceWasabiStatsApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
