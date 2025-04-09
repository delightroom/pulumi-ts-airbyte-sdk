import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceCampayn(args: GetSourceCampaynArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceCampaynResult>;
/**
 * A collection of arguments for invoking getSourceCampayn.
 */
export interface GetSourceCampaynArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceCampayn.
 */
export interface GetSourceCampaynResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceCampaynResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceCampaynOutput(args: GetSourceCampaynOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceCampaynResult>;
/**
 * A collection of arguments for invoking getSourceCampayn.
 */
export interface GetSourceCampaynOutputArgs {
    sourceId: pulumi.Input<string>;
}
