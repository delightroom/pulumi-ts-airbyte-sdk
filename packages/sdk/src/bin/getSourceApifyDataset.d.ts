import * as pulumi from "@pulumi/pulumi";
export declare function getSourceApifyDataset(args: GetSourceApifyDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceApifyDatasetResult>;
/**
 * A collection of arguments for invoking getSourceApifyDataset.
 */
export interface GetSourceApifyDatasetArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceApifyDataset.
 */
export interface GetSourceApifyDatasetResult {
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
export declare function getSourceApifyDatasetOutput(args: GetSourceApifyDatasetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceApifyDatasetResult>;
/**
 * A collection of arguments for invoking getSourceApifyDataset.
 */
export interface GetSourceApifyDatasetOutputArgs {
    sourceId: pulumi.Input<string>;
}
