import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePingdom(args: GetSourcePingdomArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePingdomResult>;
/**
 * A collection of arguments for invoking getSourcePingdom.
 */
export interface GetSourcePingdomArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePingdom.
 */
export interface GetSourcePingdomResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePingdomResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePingdomOutput(args: GetSourcePingdomOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePingdomResult>;
/**
 * A collection of arguments for invoking getSourcePingdom.
 */
export interface GetSourcePingdomOutputArgs {
    sourceId: pulumi.Input<string>;
}
