import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFreightview(args: GetSourceFreightviewArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreightviewResult>;
/**
 * A collection of arguments for invoking getSourceFreightview.
 */
export interface GetSourceFreightviewArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreightview.
 */
export interface GetSourceFreightviewResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFreightviewResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFreightviewOutput(args: GetSourceFreightviewOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreightviewResult>;
/**
 * A collection of arguments for invoking getSourceFreightview.
 */
export interface GetSourceFreightviewOutputArgs {
    sourceId: pulumi.Input<string>;
}
