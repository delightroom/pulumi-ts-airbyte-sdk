import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePartnerstack(args: GetSourcePartnerstackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePartnerstackResult>;
/**
 * A collection of arguments for invoking getSourcePartnerstack.
 */
export interface GetSourcePartnerstackArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePartnerstack.
 */
export interface GetSourcePartnerstackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePartnerstackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePartnerstackOutput(args: GetSourcePartnerstackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePartnerstackResult>;
/**
 * A collection of arguments for invoking getSourcePartnerstack.
 */
export interface GetSourcePartnerstackOutputArgs {
    sourceId: pulumi.Input<string>;
}
