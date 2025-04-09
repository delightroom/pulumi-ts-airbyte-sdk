import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceActivecampaign(args: GetSourceActivecampaignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceActivecampaignResult>;
/**
 * A collection of arguments for invoking getSourceActivecampaign.
 */
export interface GetSourceActivecampaignArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceActivecampaign.
 */
export interface GetSourceActivecampaignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceActivecampaignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceActivecampaignOutput(args: GetSourceActivecampaignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceActivecampaignResult>;
/**
 * A collection of arguments for invoking getSourceActivecampaign.
 */
export interface GetSourceActivecampaignOutputArgs {
    sourceId: pulumi.Input<string>;
}
