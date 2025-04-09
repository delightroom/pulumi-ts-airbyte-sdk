import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWorkable(args: GetSourceWorkableArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWorkableResult>;
/**
 * A collection of arguments for invoking getSourceWorkable.
 */
export interface GetSourceWorkableArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWorkable.
 */
export interface GetSourceWorkableResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWorkableResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWorkableOutput(args: GetSourceWorkableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWorkableResult>;
/**
 * A collection of arguments for invoking getSourceWorkable.
 */
export interface GetSourceWorkableOutputArgs {
    sourceId: pulumi.Input<string>;
}
