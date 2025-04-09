import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceProductive(args: GetSourceProductiveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceProductiveResult>;
/**
 * A collection of arguments for invoking getSourceProductive.
 */
export interface GetSourceProductiveArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceProductive.
 */
export interface GetSourceProductiveResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceProductiveResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceProductiveOutput(args: GetSourceProductiveOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceProductiveResult>;
/**
 * A collection of arguments for invoking getSourceProductive.
 */
export interface GetSourceProductiveOutputArgs {
    sourceId: pulumi.Input<string>;
}
