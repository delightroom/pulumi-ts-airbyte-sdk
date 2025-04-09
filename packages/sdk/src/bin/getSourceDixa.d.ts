import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceDixa(args: GetSourceDixaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceDixaResult>;
/**
 * A collection of arguments for invoking getSourceDixa.
 */
export interface GetSourceDixaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceDixa.
 */
export interface GetSourceDixaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceDixaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceDixaOutput(args: GetSourceDixaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceDixaResult>;
/**
 * A collection of arguments for invoking getSourceDixa.
 */
export interface GetSourceDixaOutputArgs {
    sourceId: pulumi.Input<string>;
}
