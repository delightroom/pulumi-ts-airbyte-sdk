import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOutreach(args: GetSourceOutreachArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOutreachResult>;
/**
 * A collection of arguments for invoking getSourceOutreach.
 */
export interface GetSourceOutreachArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOutreach.
 */
export interface GetSourceOutreachResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOutreachResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOutreachOutput(args: GetSourceOutreachOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOutreachResult>;
/**
 * A collection of arguments for invoking getSourceOutreach.
 */
export interface GetSourceOutreachOutputArgs {
    sourceId: pulumi.Input<string>;
}
