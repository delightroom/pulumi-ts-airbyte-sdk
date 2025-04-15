import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGiphy(args: GetSourceGiphyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGiphyResult>;
/**
 * A collection of arguments for invoking getSourceGiphy.
 */
export interface GetSourceGiphyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGiphy.
 */
export interface GetSourceGiphyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGiphyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGiphyOutput(args: GetSourceGiphyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGiphyResult>;
/**
 * A collection of arguments for invoking getSourceGiphy.
 */
export interface GetSourceGiphyOutputArgs {
    sourceId: pulumi.Input<string>;
}
