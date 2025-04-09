import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceConfigcat(args: GetSourceConfigcatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConfigcatResult>;
/**
 * A collection of arguments for invoking getSourceConfigcat.
 */
export interface GetSourceConfigcatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceConfigcat.
 */
export interface GetSourceConfigcatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceConfigcatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceConfigcatOutput(args: GetSourceConfigcatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConfigcatResult>;
/**
 * A collection of arguments for invoking getSourceConfigcat.
 */
export interface GetSourceConfigcatOutputArgs {
    sourceId: pulumi.Input<string>;
}
