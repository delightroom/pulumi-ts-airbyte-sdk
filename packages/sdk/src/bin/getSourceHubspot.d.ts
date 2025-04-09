import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHubspot(args: GetSourceHubspotArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHubspotResult>;
/**
 * A collection of arguments for invoking getSourceHubspot.
 */
export interface GetSourceHubspotArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHubspot.
 */
export interface GetSourceHubspotResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHubspotResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHubspotOutput(args: GetSourceHubspotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHubspotResult>;
/**
 * A collection of arguments for invoking getSourceHubspot.
 */
export interface GetSourceHubspotOutputArgs {
    sourceId: pulumi.Input<string>;
}
