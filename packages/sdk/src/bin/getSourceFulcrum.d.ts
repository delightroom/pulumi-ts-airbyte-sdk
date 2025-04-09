import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFulcrum(args: GetSourceFulcrumArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFulcrumResult>;
/**
 * A collection of arguments for invoking getSourceFulcrum.
 */
export interface GetSourceFulcrumArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFulcrum.
 */
export interface GetSourceFulcrumResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFulcrumResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFulcrumOutput(args: GetSourceFulcrumOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFulcrumResult>;
/**
 * A collection of arguments for invoking getSourceFulcrum.
 */
export interface GetSourceFulcrumOutputArgs {
    sourceId: pulumi.Input<string>;
}
