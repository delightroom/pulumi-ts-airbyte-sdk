import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEncharge(args: GetSourceEnchargeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEnchargeResult>;
/**
 * A collection of arguments for invoking getSourceEncharge.
 */
export interface GetSourceEnchargeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEncharge.
 */
export interface GetSourceEnchargeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEnchargeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEnchargeOutput(args: GetSourceEnchargeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEnchargeResult>;
/**
 * A collection of arguments for invoking getSourceEncharge.
 */
export interface GetSourceEnchargeOutputArgs {
    sourceId: pulumi.Input<string>;
}
