import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOpuswatch(args: GetSourceOpuswatchArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpuswatchResult>;
/**
 * A collection of arguments for invoking getSourceOpuswatch.
 */
export interface GetSourceOpuswatchArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOpuswatch.
 */
export interface GetSourceOpuswatchResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpuswatchResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOpuswatchOutput(args: GetSourceOpuswatchOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpuswatchResult>;
/**
 * A collection of arguments for invoking getSourceOpuswatch.
 */
export interface GetSourceOpuswatchOutputArgs {
    sourceId: pulumi.Input<string>;
}
