import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDestinationAzureBlobStorage(args: GetDestinationAzureBlobStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationAzureBlobStorageResult>;
/**
 * A collection of arguments for invoking getDestinationAzureBlobStorage.
 */
export interface GetDestinationAzureBlobStorageArgs {
    destinationId: string;
}
/**
 * A collection of values returned by getDestinationAzureBlobStorage.
 */
export interface GetDestinationAzureBlobStorageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetDestinationAzureBlobStorageResourceAllocation;
    readonly workspaceId: string;
}
export declare function getDestinationAzureBlobStorageOutput(args: GetDestinationAzureBlobStorageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDestinationAzureBlobStorageResult>;
/**
 * A collection of arguments for invoking getDestinationAzureBlobStorage.
 */
export interface GetDestinationAzureBlobStorageOutputArgs {
    destinationId: pulumi.Input<string>;
}
