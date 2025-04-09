import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRuddr(args: GetSourceRuddrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRuddrResult>;
/**
 * A collection of arguments for invoking getSourceRuddr.
 */
export interface GetSourceRuddrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRuddr.
 */
export interface GetSourceRuddrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRuddrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRuddrOutput(args: GetSourceRuddrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRuddrResult>;
/**
 * A collection of arguments for invoking getSourceRuddr.
 */
export interface GetSourceRuddrOutputArgs {
    sourceId: pulumi.Input<string>;
}
