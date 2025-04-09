import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceYousign(args: GetSourceYousignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceYousignResult>;
/**
 * A collection of arguments for invoking getSourceYousign.
 */
export interface GetSourceYousignArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceYousign.
 */
export interface GetSourceYousignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceYousignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceYousignOutput(args: GetSourceYousignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceYousignResult>;
/**
 * A collection of arguments for invoking getSourceYousign.
 */
export interface GetSourceYousignOutputArgs {
    sourceId: pulumi.Input<string>;
}
