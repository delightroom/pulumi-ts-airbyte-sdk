import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFleetio(args: GetSourceFleetioArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFleetioResult>;
/**
 * A collection of arguments for invoking getSourceFleetio.
 */
export interface GetSourceFleetioArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFleetio.
 */
export interface GetSourceFleetioResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFleetioResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFleetioOutput(args: GetSourceFleetioOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFleetioResult>;
/**
 * A collection of arguments for invoking getSourceFleetio.
 */
export interface GetSourceFleetioOutputArgs {
    sourceId: pulumi.Input<string>;
}
