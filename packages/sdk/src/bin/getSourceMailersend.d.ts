import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMailersend(args: GetSourceMailersendArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMailersendResult>;
/**
 * A collection of arguments for invoking getSourceMailersend.
 */
export interface GetSourceMailersendArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMailersend.
 */
export interface GetSourceMailersendResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMailersendResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMailersendOutput(args: GetSourceMailersendOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMailersendResult>;
/**
 * A collection of arguments for invoking getSourceMailersend.
 */
export interface GetSourceMailersendOutputArgs {
    sourceId: pulumi.Input<string>;
}
