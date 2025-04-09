import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceKissmetrics(args: GetSourceKissmetricsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKissmetricsResult>;
/**
 * A collection of arguments for invoking getSourceKissmetrics.
 */
export interface GetSourceKissmetricsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceKissmetrics.
 */
export interface GetSourceKissmetricsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceKissmetricsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceKissmetricsOutput(args: GetSourceKissmetricsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceKissmetricsResult>;
/**
 * A collection of arguments for invoking getSourceKissmetrics.
 */
export interface GetSourceKissmetricsOutputArgs {
    sourceId: pulumi.Input<string>;
}
