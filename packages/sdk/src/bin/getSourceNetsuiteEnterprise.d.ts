import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNetsuiteEnterprise(args: GetSourceNetsuiteEnterpriseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNetsuiteEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceNetsuiteEnterprise.
 */
export interface GetSourceNetsuiteEnterpriseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNetsuiteEnterprise.
 */
export interface GetSourceNetsuiteEnterpriseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNetsuiteEnterpriseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNetsuiteEnterpriseOutput(args: GetSourceNetsuiteEnterpriseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNetsuiteEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceNetsuiteEnterprise.
 */
export interface GetSourceNetsuiteEnterpriseOutputArgs {
    sourceId: pulumi.Input<string>;
}
