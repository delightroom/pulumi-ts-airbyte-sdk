import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDropboxSign(args: GetSourceDropboxSignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDropboxSignResult>;
/**
 * A collection of arguments for invoking getSourceDropboxSign.
 */
export interface GetSourceDropboxSignArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDropboxSign.
 */
export interface GetSourceDropboxSignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDropboxSignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDropboxSignOutput(args: GetSourceDropboxSignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDropboxSignResult>;
/**
 * A collection of arguments for invoking getSourceDropboxSign.
 */
export interface GetSourceDropboxSignOutputArgs {
    sourceId: pulumi.Input<string>;
}
