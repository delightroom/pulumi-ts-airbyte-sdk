import * as pulumi from "@pulumi/pulumi";
export declare function getSourceSftpBulk(args: GetSourceSftpBulkArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSftpBulkResult>;
/**
 * A collection of arguments for invoking getSourceSftpBulk.
 */
export interface GetSourceSftpBulkArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSftpBulk.
 */
export interface GetSourceSftpBulkResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSftpBulkOutput(args: GetSourceSftpBulkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSftpBulkResult>;
/**
 * A collection of arguments for invoking getSourceSftpBulk.
 */
export interface GetSourceSftpBulkOutputArgs {
    sourceId: pulumi.Input<string>;
}
