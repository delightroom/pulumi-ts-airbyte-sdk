import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceRentcast(args: GetSourceRentcastArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceRentcastResult>;
/**
 * A collection of arguments for invoking getSourceRentcast.
 */
export interface GetSourceRentcastArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceRentcast.
 */
export interface GetSourceRentcastResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceRentcastResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceRentcastOutput(args: GetSourceRentcastOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceRentcastResult>;
/**
 * A collection of arguments for invoking getSourceRentcast.
 */
export interface GetSourceRentcastOutputArgs {
    sourceId: pulumi.Input<string>;
}
