import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSendpulse(args: GetSourceSendpulseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSendpulseResult>;
/**
 * A collection of arguments for invoking getSourceSendpulse.
 */
export interface GetSourceSendpulseArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSendpulse.
 */
export interface GetSourceSendpulseResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSendpulseResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSendpulseOutput(args: GetSourceSendpulseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSendpulseResult>;
/**
 * A collection of arguments for invoking getSourceSendpulse.
 */
export interface GetSourceSendpulseOutputArgs {
    sourceId: pulumi.Input<string>;
}
