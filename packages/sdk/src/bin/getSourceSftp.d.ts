import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSftp(args: GetSourceSftpArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSftpResult>;
/**
 * A collection of arguments for invoking getSourceSftp.
 */
export interface GetSourceSftpArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSftp.
 */
export interface GetSourceSftpResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSftpResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSftpOutput(args: GetSourceSftpOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSftpResult>;
/**
 * A collection of arguments for invoking getSourceSftp.
 */
export interface GetSourceSftpOutputArgs {
    sourceId: pulumi.Input<string>;
}
