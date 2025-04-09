import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceClickupApi(args: GetSourceClickupApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClickupApiResult>;
/**
 * A collection of arguments for invoking getSourceClickupApi.
 */
export interface GetSourceClickupApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceClickupApi.
 */
export interface GetSourceClickupApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceClickupApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceClickupApiOutput(args: GetSourceClickupApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceClickupApiResult>;
/**
 * A collection of arguments for invoking getSourceClickupApi.
 */
export interface GetSourceClickupApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
