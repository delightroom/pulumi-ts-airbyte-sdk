import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSapHanaEnterprise(args: GetSourceSapHanaEnterpriseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSapHanaEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceSapHanaEnterprise.
 */
export interface GetSourceSapHanaEnterpriseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSapHanaEnterprise.
 */
export interface GetSourceSapHanaEnterpriseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSapHanaEnterpriseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSapHanaEnterpriseOutput(args: GetSourceSapHanaEnterpriseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSapHanaEnterpriseResult>;
/**
 * A collection of arguments for invoking getSourceSapHanaEnterprise.
 */
export interface GetSourceSapHanaEnterpriseOutputArgs {
    sourceId: pulumi.Input<string>;
}
