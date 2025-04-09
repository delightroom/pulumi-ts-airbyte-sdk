import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePartnerize(args: GetSourcePartnerizeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePartnerizeResult>;
/**
 * A collection of arguments for invoking getSourcePartnerize.
 */
export interface GetSourcePartnerizeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePartnerize.
 */
export interface GetSourcePartnerizeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePartnerizeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePartnerizeOutput(args: GetSourcePartnerizeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePartnerizeResult>;
/**
 * A collection of arguments for invoking getSourcePartnerize.
 */
export interface GetSourcePartnerizeOutputArgs {
    sourceId: pulumi.Input<string>;
}
