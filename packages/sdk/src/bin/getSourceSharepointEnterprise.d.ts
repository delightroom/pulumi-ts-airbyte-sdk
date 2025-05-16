import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSharepointEnterprise(args: GetSourceSharepointEnterpriseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSharepointEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceSharepointEnterprise.
 */
export interface GetSourceSharepointEnterpriseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSharepointEnterprise.
 */
export interface GetSourceSharepointEnterpriseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSharepointEnterpriseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSharepointEnterpriseOutput(args: GetSourceSharepointEnterpriseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSharepointEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceSharepointEnterprise.
 */
export interface GetSourceSharepointEnterpriseOutputArgs {
    sourceId: pulumi.Input<string>;
}
