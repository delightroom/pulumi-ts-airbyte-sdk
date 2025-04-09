import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePagerduty(args: GetSourcePagerdutyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePagerdutyResult>;
/**
 * A collection of arguments for invoking getSourcePagerduty.
 */
export interface GetSourcePagerdutyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePagerduty.
 */
export interface GetSourcePagerdutyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePagerdutyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePagerdutyOutput(args: GetSourcePagerdutyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePagerdutyResult>;
/**
 * A collection of arguments for invoking getSourcePagerduty.
 */
export interface GetSourcePagerdutyOutputArgs {
    sourceId: pulumi.Input<string>;
}
