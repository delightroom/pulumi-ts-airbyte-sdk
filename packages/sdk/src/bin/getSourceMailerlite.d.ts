import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailerlite(args: GetSourceMailerliteArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailerliteResult>;
/**
 * A collection of arguments for invoking getSourceMailerlite.
 */
export interface GetSourceMailerliteArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailerlite.
 */
export interface GetSourceMailerliteResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailerliteResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailerliteOutput(args: GetSourceMailerliteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailerliteResult>;
/**
 * A collection of arguments for invoking getSourceMailerlite.
 */
export interface GetSourceMailerliteOutputArgs {
    sourceId: pulumi.Input<string>;
}
