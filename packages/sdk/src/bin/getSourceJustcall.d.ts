import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceJustcall(args: GetSourceJustcallArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceJustcallResult>;
/**
 * A collection of arguments for invoking getSourceJustcall.
 */
export interface GetSourceJustcallArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceJustcall.
 */
export interface GetSourceJustcallResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceJustcallResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceJustcallOutput(args: GetSourceJustcallOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceJustcallResult>;
/**
 * A collection of arguments for invoking getSourceJustcall.
 */
export interface GetSourceJustcallOutputArgs {
    sourceId: pulumi.Input<string>;
}
