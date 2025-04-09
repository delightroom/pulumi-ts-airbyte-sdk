import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAlgolia(args: GetSourceAlgoliaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAlgoliaResult>;
/**
 * A collection of arguments for invoking getSourceAlgolia.
 */
export interface GetSourceAlgoliaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAlgolia.
 */
export interface GetSourceAlgoliaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAlgoliaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAlgoliaOutput(args: GetSourceAlgoliaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAlgoliaResult>;
/**
 * A collection of arguments for invoking getSourceAlgolia.
 */
export interface GetSourceAlgoliaOutputArgs {
    sourceId: pulumi.Input<string>;
}
