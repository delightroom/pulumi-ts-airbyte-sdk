import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceConcord(args: GetSourceConcordArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConcordResult>;
/**
 * A collection of arguments for invoking getSourceConcord.
 */
export interface GetSourceConcordArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceConcord.
 */
export interface GetSourceConcordResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceConcordResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceConcordOutput(args: GetSourceConcordOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceConcordResult>;
/**
 * A collection of arguments for invoking getSourceConcord.
 */
export interface GetSourceConcordOutputArgs {
    sourceId: pulumi.Input<string>;
}
