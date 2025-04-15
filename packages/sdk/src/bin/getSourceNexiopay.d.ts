import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNexiopay(args: GetSourceNexiopayArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNexiopayResult>;
/**
 * A collection of arguments for invoking getSourceNexiopay.
 */
export interface GetSourceNexiopayArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNexiopay.
 */
export interface GetSourceNexiopayResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNexiopayResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNexiopayOutput(args: GetSourceNexiopayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNexiopayResult>;
/**
 * A collection of arguments for invoking getSourceNexiopay.
 */
export interface GetSourceNexiopayOutputArgs {
    sourceId: pulumi.Input<string>;
}
