import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePlausible(args: GetSourcePlausibleArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePlausibleResult>;
/**
 * A collection of arguments for invoking getSourcePlausible.
 */
export interface GetSourcePlausibleArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePlausible.
 */
export interface GetSourcePlausibleResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePlausibleResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePlausibleOutput(args: GetSourcePlausibleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePlausibleResult>;
/**
 * A collection of arguments for invoking getSourcePlausible.
 */
export interface GetSourcePlausibleOutputArgs {
    sourceId: pulumi.Input<string>;
}
