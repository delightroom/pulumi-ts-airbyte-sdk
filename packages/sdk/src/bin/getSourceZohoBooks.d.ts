import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoBooks(args: GetSourceZohoBooksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoBooksResult>;
/**
 * A collection of arguments for invoking getSourceZohoBooks.
 */
export interface GetSourceZohoBooksArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoBooks.
 */
export interface GetSourceZohoBooksResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoBooksResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoBooksOutput(args: GetSourceZohoBooksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoBooksResult>;
/**
 * A collection of arguments for invoking getSourceZohoBooks.
 */
export interface GetSourceZohoBooksOutputArgs {
    sourceId: pulumi.Input<string>;
}
