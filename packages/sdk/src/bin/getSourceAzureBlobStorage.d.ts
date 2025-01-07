import * as pulumi from "@pulumi/pulumi";
export declare function getSourceAzureBlobStorage(args: GetSourceAzureBlobStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAzureBlobStorageResult>;
/**
 * A collection of arguments for invoking getSourceAzureBlobStorage.
 */
export interface GetSourceAzureBlobStorageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAzureBlobStorage.
 */
export interface GetSourceAzureBlobStorageResult {
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
export declare function getSourceAzureBlobStorageOutput(args: GetSourceAzureBlobStorageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAzureBlobStorageResult>;
/**
 * A collection of arguments for invoking getSourceAzureBlobStorage.
 */
export interface GetSourceAzureBlobStorageOutputArgs {
    sourceId: pulumi.Input<string>;
}
