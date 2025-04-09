import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOpenDataDc(args: GetSourceOpenDataDcArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOpenDataDcResult>;
/**
 * A collection of arguments for invoking getSourceOpenDataDc.
 */
export interface GetSourceOpenDataDcArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOpenDataDc.
 */
export interface GetSourceOpenDataDcResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOpenDataDcResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOpenDataDcOutput(args: GetSourceOpenDataDcOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOpenDataDcResult>;
/**
 * A collection of arguments for invoking getSourceOpenDataDc.
 */
export interface GetSourceOpenDataDcOutputArgs {
    sourceId: pulumi.Input<string>;
}
