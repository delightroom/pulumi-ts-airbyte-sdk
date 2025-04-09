import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRdStationMarketing(args: GetSourceRdStationMarketingArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRdStationMarketingResult>;
/**
 * A collection of arguments for invoking getSourceRdStationMarketing.
 */
export interface GetSourceRdStationMarketingArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRdStationMarketing.
 */
export interface GetSourceRdStationMarketingResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRdStationMarketingResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRdStationMarketingOutput(args: GetSourceRdStationMarketingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRdStationMarketingResult>;
/**
 * A collection of arguments for invoking getSourceRdStationMarketing.
 */
export interface GetSourceRdStationMarketingOutputArgs {
    sourceId: pulumi.Input<string>;
}
