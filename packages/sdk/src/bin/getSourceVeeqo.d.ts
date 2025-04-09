import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceVeeqo(args: GetSourceVeeqoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceVeeqoResult>;
/**
 * A collection of arguments for invoking getSourceVeeqo.
 */
export interface GetSourceVeeqoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceVeeqo.
 */
export interface GetSourceVeeqoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceVeeqoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceVeeqoOutput(args: GetSourceVeeqoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceVeeqoResult>;
/**
 * A collection of arguments for invoking getSourceVeeqo.
 */
export interface GetSourceVeeqoOutputArgs {
    sourceId: pulumi.Input<string>;
}
