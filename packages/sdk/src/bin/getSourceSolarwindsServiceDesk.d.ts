import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSolarwindsServiceDesk(args: GetSourceSolarwindsServiceDeskArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSolarwindsServiceDeskResult>;
/**
 * A collection of arguments for invoking getSourceSolarwindsServiceDesk.
 */
export interface GetSourceSolarwindsServiceDeskArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSolarwindsServiceDesk.
 */
export interface GetSourceSolarwindsServiceDeskResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSolarwindsServiceDeskResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSolarwindsServiceDeskOutput(args: GetSourceSolarwindsServiceDeskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSolarwindsServiceDeskResult>;
/**
 * A collection of arguments for invoking getSourceSolarwindsServiceDesk.
 */
export interface GetSourceSolarwindsServiceDeskOutputArgs {
    sourceId: pulumi.Input<string>;
}
