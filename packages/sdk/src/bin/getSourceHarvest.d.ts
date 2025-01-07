import * as pulumi from "@pulumi/pulumi";
export declare function getSourceHarvest(args: GetSourceHarvestArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHarvestResult>;
/**
 * A collection of arguments for invoking getSourceHarvest.
 */
export interface GetSourceHarvestArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHarvest.
 */
export interface GetSourceHarvestResult {
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
export declare function getSourceHarvestOutput(args: GetSourceHarvestOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHarvestResult>;
/**
 * A collection of arguments for invoking getSourceHarvest.
 */
export interface GetSourceHarvestOutputArgs {
    sourceId: pulumi.Input<string>;
}
