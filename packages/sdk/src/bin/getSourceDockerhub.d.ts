import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDockerhub(args: GetSourceDockerhubArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDockerhubResult>;
/**
 * A collection of arguments for invoking getSourceDockerhub.
 */
export interface GetSourceDockerhubArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDockerhub.
 */
export interface GetSourceDockerhubResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDockerhubResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDockerhubOutput(args: GetSourceDockerhubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDockerhubResult>;
/**
 * A collection of arguments for invoking getSourceDockerhub.
 */
export interface GetSourceDockerhubOutputArgs {
    sourceId: pulumi.Input<string>;
}
