import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDrift(args: GetSourceDriftArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDriftResult>;
/**
 * A collection of arguments for invoking getSourceDrift.
 */
export interface GetSourceDriftArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDrift.
 */
export interface GetSourceDriftResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDriftResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDriftOutput(args: GetSourceDriftOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDriftResult>;
/**
 * A collection of arguments for invoking getSourceDrift.
 */
export interface GetSourceDriftOutputArgs {
    sourceId: pulumi.Input<string>;
}
