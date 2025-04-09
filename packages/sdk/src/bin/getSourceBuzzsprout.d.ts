import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBuzzsprout(args: GetSourceBuzzsproutArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBuzzsproutResult>;
/**
 * A collection of arguments for invoking getSourceBuzzsprout.
 */
export interface GetSourceBuzzsproutArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBuzzsprout.
 */
export interface GetSourceBuzzsproutResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBuzzsproutResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBuzzsproutOutput(args: GetSourceBuzzsproutOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBuzzsproutResult>;
/**
 * A collection of arguments for invoking getSourceBuzzsprout.
 */
export interface GetSourceBuzzsproutOutputArgs {
    sourceId: pulumi.Input<string>;
}
