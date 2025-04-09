import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceZohoCampaign(args: GetSourceZohoCampaignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceZohoCampaignResult>;
/**
 * A collection of arguments for invoking getSourceZohoCampaign.
 */
export interface GetSourceZohoCampaignArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceZohoCampaign.
 */
export interface GetSourceZohoCampaignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceZohoCampaignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceZohoCampaignOutput(args: GetSourceZohoCampaignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceZohoCampaignResult>;
/**
 * A collection of arguments for invoking getSourceZohoCampaign.
 */
export interface GetSourceZohoCampaignOutputArgs {
    sourceId: pulumi.Input<string>;
}
