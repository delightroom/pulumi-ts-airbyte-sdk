import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFillout(args: GetSourceFilloutArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFilloutResult>;
/**
 * A collection of arguments for invoking getSourceFillout.
 */
export interface GetSourceFilloutArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFillout.
 */
export interface GetSourceFilloutResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFilloutResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFilloutOutput(args: GetSourceFilloutOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFilloutResult>;
/**
 * A collection of arguments for invoking getSourceFillout.
 */
export interface GetSourceFilloutOutputArgs {
    sourceId: pulumi.Input<string>;
}
