import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFullstory(args: GetSourceFullstoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFullstoryResult>;
/**
 * A collection of arguments for invoking getSourceFullstory.
 */
export interface GetSourceFullstoryArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFullstory.
 */
export interface GetSourceFullstoryResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFullstoryResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFullstoryOutput(args: GetSourceFullstoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFullstoryResult>;
/**
 * A collection of arguments for invoking getSourceFullstory.
 */
export interface GetSourceFullstoryOutputArgs {
    sourceId: pulumi.Input<string>;
}
