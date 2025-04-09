import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSysteme(args: GetSourceSystemeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSystemeResult>;
/**
 * A collection of arguments for invoking getSourceSysteme.
 */
export interface GetSourceSystemeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSysteme.
 */
export interface GetSourceSystemeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSystemeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSystemeOutput(args: GetSourceSystemeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSystemeResult>;
/**
 * A collection of arguments for invoking getSourceSysteme.
 */
export interface GetSourceSystemeOutputArgs {
    sourceId: pulumi.Input<string>;
}
