import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSmartreach(args: GetSourceSmartreachArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSmartreachResult>;
/**
 * A collection of arguments for invoking getSourceSmartreach.
 */
export interface GetSourceSmartreachArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSmartreach.
 */
export interface GetSourceSmartreachResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSmartreachResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSmartreachOutput(args: GetSourceSmartreachOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSmartreachResult>;
/**
 * A collection of arguments for invoking getSourceSmartreach.
 */
export interface GetSourceSmartreachOutputArgs {
    sourceId: pulumi.Input<string>;
}
