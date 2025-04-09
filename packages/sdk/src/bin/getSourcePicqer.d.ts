import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePicqer(args: GetSourcePicqerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePicqerResult>;
/**
 * A collection of arguments for invoking getSourcePicqer.
 */
export interface GetSourcePicqerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePicqer.
 */
export interface GetSourcePicqerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePicqerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePicqerOutput(args: GetSourcePicqerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePicqerResult>;
/**
 * A collection of arguments for invoking getSourcePicqer.
 */
export interface GetSourcePicqerOutputArgs {
    sourceId: pulumi.Input<string>;
}
