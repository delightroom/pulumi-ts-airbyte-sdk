import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCampaignMonitor(args: GetSourceCampaignMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCampaignMonitorResult>;
/**
 * A collection of arguments for invoking getSourceCampaignMonitor.
 */
export interface GetSourceCampaignMonitorArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCampaignMonitor.
 */
export interface GetSourceCampaignMonitorResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCampaignMonitorResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCampaignMonitorOutput(args: GetSourceCampaignMonitorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCampaignMonitorResult>;
/**
 * A collection of arguments for invoking getSourceCampaignMonitor.
 */
export interface GetSourceCampaignMonitorOutputArgs {
    sourceId: pulumi.Input<string>;
}
