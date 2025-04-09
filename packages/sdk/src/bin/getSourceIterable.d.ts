import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceIterable(args: GetSourceIterableArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceIterableResult>;
/**
 * A collection of arguments for invoking getSourceIterable.
 */
export interface GetSourceIterableArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceIterable.
 */
export interface GetSourceIterableResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceIterableResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceIterableOutput(args: GetSourceIterableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceIterableResult>;
/**
 * A collection of arguments for invoking getSourceIterable.
 */
export interface GetSourceIterableOutputArgs {
    sourceId: pulumi.Input<string>;
}
