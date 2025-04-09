import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceKisi(args: GetSourceKisiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKisiResult>;
/**
 * A collection of arguments for invoking getSourceKisi.
 */
export interface GetSourceKisiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKisi.
 */
export interface GetSourceKisiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKisiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceKisiOutput(args: GetSourceKisiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKisiResult>;
/**
 * A collection of arguments for invoking getSourceKisi.
 */
export interface GetSourceKisiOutputArgs {
    sourceId: pulumi.Input<string>;
}
