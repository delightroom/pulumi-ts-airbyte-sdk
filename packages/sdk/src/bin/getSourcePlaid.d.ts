import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePlaid(args: GetSourcePlaidArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePlaidResult>;
/**
 * A collection of arguments for invoking getSourcePlaid.
 */
export interface GetSourcePlaidArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePlaid.
 */
export interface GetSourcePlaidResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePlaidResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePlaidOutput(args: GetSourcePlaidOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePlaidResult>;
/**
 * A collection of arguments for invoking getSourcePlaid.
 */
export interface GetSourcePlaidOutputArgs {
    sourceId: pulumi.Input<string>;
}
