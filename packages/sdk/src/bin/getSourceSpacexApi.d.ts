import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSpacexApi(args: GetSourceSpacexApiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSpacexApiResult>;
/**
 * A collection of arguments for invoking getSourceSpacexApi.
 */
export interface GetSourceSpacexApiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSpacexApi.
 */
export interface GetSourceSpacexApiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSpacexApiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSpacexApiOutput(args: GetSourceSpacexApiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSpacexApiResult>;
/**
 * A collection of arguments for invoking getSourceSpacexApi.
 */
export interface GetSourceSpacexApiOutputArgs {
    sourceId: pulumi.Input<string>;
}
