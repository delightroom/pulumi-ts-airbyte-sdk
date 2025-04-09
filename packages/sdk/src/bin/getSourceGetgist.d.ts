import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGetgist(args: GetSourceGetgistArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGetgistResult>;
/**
 * A collection of arguments for invoking getSourceGetgist.
 */
export interface GetSourceGetgistArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGetgist.
 */
export interface GetSourceGetgistResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGetgistResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGetgistOutput(args: GetSourceGetgistOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGetgistResult>;
/**
 * A collection of arguments for invoking getSourceGetgist.
 */
export interface GetSourceGetgistOutputArgs {
    sourceId: pulumi.Input<string>;
}
