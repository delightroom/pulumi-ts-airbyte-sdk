import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMarketo(args: GetSourceMarketoArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMarketoResult>;
/**
 * A collection of arguments for invoking getSourceMarketo.
 */
export interface GetSourceMarketoArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMarketo.
 */
export interface GetSourceMarketoResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMarketoResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMarketoOutput(args: GetSourceMarketoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMarketoResult>;
/**
 * A collection of arguments for invoking getSourceMarketo.
 */
export interface GetSourceMarketoOutputArgs {
    sourceId: pulumi.Input<string>;
}
