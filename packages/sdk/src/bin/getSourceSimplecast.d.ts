import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSimplecast(args: GetSourceSimplecastArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSimplecastResult>;
/**
 * A collection of arguments for invoking getSourceSimplecast.
 */
export interface GetSourceSimplecastArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSimplecast.
 */
export interface GetSourceSimplecastResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSimplecastResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSimplecastOutput(args: GetSourceSimplecastOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSimplecastResult>;
/**
 * A collection of arguments for invoking getSourceSimplecast.
 */
export interface GetSourceSimplecastOutputArgs {
    sourceId: pulumi.Input<string>;
}
