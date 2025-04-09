import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTrustpilot(args: GetSourceTrustpilotArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTrustpilotResult>;
/**
 * A collection of arguments for invoking getSourceTrustpilot.
 */
export interface GetSourceTrustpilotArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTrustpilot.
 */
export interface GetSourceTrustpilotResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTrustpilotResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTrustpilotOutput(args: GetSourceTrustpilotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTrustpilotResult>;
/**
 * A collection of arguments for invoking getSourceTrustpilot.
 */
export interface GetSourceTrustpilotOutputArgs {
    sourceId: pulumi.Input<string>;
}
