import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailtrap(args: GetSourceMailtrapArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailtrapResult>;
/**
 * A collection of arguments for invoking getSourceMailtrap.
 */
export interface GetSourceMailtrapArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailtrap.
 */
export interface GetSourceMailtrapResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailtrapResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailtrapOutput(args: GetSourceMailtrapOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailtrapResult>;
/**
 * A collection of arguments for invoking getSourceMailtrap.
 */
export interface GetSourceMailtrapOutputArgs {
    sourceId: pulumi.Input<string>;
}
