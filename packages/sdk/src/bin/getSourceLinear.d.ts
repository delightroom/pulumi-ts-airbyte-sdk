import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceLinear(args: GetSourceLinearArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLinearResult>;
/**
 * A collection of arguments for invoking getSourceLinear.
 */
export interface GetSourceLinearArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLinear.
 */
export interface GetSourceLinearResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLinearResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLinearOutput(args: GetSourceLinearOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLinearResult>;
/**
 * A collection of arguments for invoking getSourceLinear.
 */
export interface GetSourceLinearOutputArgs {
    sourceId: pulumi.Input<string>;
}
