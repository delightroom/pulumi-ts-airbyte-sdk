import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEConomic(args: GetSourceEConomicArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEConomicResult>;
/**
 * A collection of arguments for invoking getSourceEConomic.
 */
export interface GetSourceEConomicArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEConomic.
 */
export interface GetSourceEConomicResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEConomicResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEConomicOutput(args: GetSourceEConomicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEConomicResult>;
/**
 * A collection of arguments for invoking getSourceEConomic.
 */
export interface GetSourceEConomicOutputArgs {
    sourceId: pulumi.Input<string>;
}
