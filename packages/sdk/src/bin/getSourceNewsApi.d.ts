import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNewsApi(args: GetSourceNewsApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNewsApiResult>;
/**
 * A collection of arguments for invoking getSourceNewsApi.
 */
export interface GetSourceNewsApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNewsApi.
 */
export interface GetSourceNewsApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNewsApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNewsApiOutput(args: GetSourceNewsApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNewsApiResult>;
/**
 * A collection of arguments for invoking getSourceNewsApi.
 */
export interface GetSourceNewsApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
