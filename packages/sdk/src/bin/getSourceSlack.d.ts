import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSlack(args: GetSourceSlackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSlackResult>;
/**
 * A collection of arguments for invoking getSourceSlack.
 */
export interface GetSourceSlackArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSlack.
 */
export interface GetSourceSlackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSlackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSlackOutput(args: GetSourceSlackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSlackResult>;
/**
 * A collection of arguments for invoking getSourceSlack.
 */
export interface GetSourceSlackOutputArgs {
    sourceId: pulumi.Input<string>;
}
