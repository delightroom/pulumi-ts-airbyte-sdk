import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAgilecrm(args: GetSourceAgilecrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAgilecrmResult>;
/**
 * A collection of arguments for invoking getSourceAgilecrm.
 */
export interface GetSourceAgilecrmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAgilecrm.
 */
export interface GetSourceAgilecrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAgilecrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAgilecrmOutput(args: GetSourceAgilecrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAgilecrmResult>;
/**
 * A collection of arguments for invoking getSourceAgilecrm.
 */
export interface GetSourceAgilecrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
