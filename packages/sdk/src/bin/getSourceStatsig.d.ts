import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceStatsig(args: GetSourceStatsigArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceStatsigResult>;
/**
 * A collection of arguments for invoking getSourceStatsig.
 */
export interface GetSourceStatsigArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceStatsig.
 */
export interface GetSourceStatsigResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceStatsigResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceStatsigOutput(args: GetSourceStatsigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceStatsigResult>;
/**
 * A collection of arguments for invoking getSourceStatsig.
 */
export interface GetSourceStatsigOutputArgs {
    sourceId: pulumi.Input<string>;
}
