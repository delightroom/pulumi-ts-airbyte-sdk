import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZapierSupportedStorage(args: GetSourceZapierSupportedStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZapierSupportedStorageResult>;
/**
 * A collection of arguments for invoking getSourceZapierSupportedStorage.
 */
export interface GetSourceZapierSupportedStorageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZapierSupportedStorage.
 */
export interface GetSourceZapierSupportedStorageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZapierSupportedStorageResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZapierSupportedStorageOutput(args: GetSourceZapierSupportedStorageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZapierSupportedStorageResult>;
/**
 * A collection of arguments for invoking getSourceZapierSupportedStorage.
 */
export interface GetSourceZapierSupportedStorageOutputArgs {
    sourceId: pulumi.Input<string>;
}
