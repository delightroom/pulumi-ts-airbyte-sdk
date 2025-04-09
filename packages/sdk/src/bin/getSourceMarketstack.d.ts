import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMarketstack(args: GetSourceMarketstackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMarketstackResult>;
/**
 * A collection of arguments for invoking getSourceMarketstack.
 */
export interface GetSourceMarketstackArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMarketstack.
 */
export interface GetSourceMarketstackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMarketstackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMarketstackOutput(args: GetSourceMarketstackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMarketstackResult>;
/**
 * A collection of arguments for invoking getSourceMarketstack.
 */
export interface GetSourceMarketstackOutputArgs {
    sourceId: pulumi.Input<string>;
}
