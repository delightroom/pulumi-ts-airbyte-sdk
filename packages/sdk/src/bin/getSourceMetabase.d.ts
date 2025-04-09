import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMetabase(args: GetSourceMetabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMetabaseResult>;
/**
 * A collection of arguments for invoking getSourceMetabase.
 */
export interface GetSourceMetabaseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMetabase.
 */
export interface GetSourceMetabaseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMetabaseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMetabaseOutput(args: GetSourceMetabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMetabaseResult>;
/**
 * A collection of arguments for invoking getSourceMetabase.
 */
export interface GetSourceMetabaseOutputArgs {
    sourceId: pulumi.Input<string>;
}
