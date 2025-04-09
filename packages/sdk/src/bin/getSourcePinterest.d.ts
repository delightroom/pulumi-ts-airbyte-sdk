import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePinterest(args: GetSourcePinterestArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePinterestResult>;
/**
 * A collection of arguments for invoking getSourcePinterest.
 */
export interface GetSourcePinterestArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePinterest.
 */
export interface GetSourcePinterestResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePinterestResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePinterestOutput(args: GetSourcePinterestOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePinterestResult>;
/**
 * A collection of arguments for invoking getSourcePinterest.
 */
export interface GetSourcePinterestOutputArgs {
    sourceId: pulumi.Input<string>;
}
