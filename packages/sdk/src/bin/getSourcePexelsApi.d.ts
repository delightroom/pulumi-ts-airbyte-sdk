import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePexelsApi(args: GetSourcePexelsApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePexelsApiResult>;
/**
 * A collection of arguments for invoking getSourcePexelsApi.
 */
export interface GetSourcePexelsApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePexelsApi.
 */
export interface GetSourcePexelsApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePexelsApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePexelsApiOutput(args: GetSourcePexelsApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePexelsApiResult>;
/**
 * A collection of arguments for invoking getSourcePexelsApi.
 */
export interface GetSourcePexelsApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
