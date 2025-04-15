import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSvix(args: GetSourceSvixArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSvixResult>;
/**
 * A collection of arguments for invoking getSourceSvix.
 */
export interface GetSourceSvixArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSvix.
 */
export interface GetSourceSvixResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSvixResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSvixOutput(args: GetSourceSvixOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSvixResult>;
/**
 * A collection of arguments for invoking getSourceSvix.
 */
export interface GetSourceSvixOutputArgs {
    sourceId: pulumi.Input<string>;
}
