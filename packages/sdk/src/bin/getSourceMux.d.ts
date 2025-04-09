import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMux(args: GetSourceMuxArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMuxResult>;
/**
 * A collection of arguments for invoking getSourceMux.
 */
export interface GetSourceMuxArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMux.
 */
export interface GetSourceMuxResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMuxResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMuxOutput(args: GetSourceMuxOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMuxResult>;
/**
 * A collection of arguments for invoking getSourceMux.
 */
export interface GetSourceMuxOutputArgs {
    sourceId: pulumi.Input<string>;
}
