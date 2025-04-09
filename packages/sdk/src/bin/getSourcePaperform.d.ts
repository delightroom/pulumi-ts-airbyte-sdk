import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePaperform(args: GetSourcePaperformArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePaperformResult>;
/**
 * A collection of arguments for invoking getSourcePaperform.
 */
export interface GetSourcePaperformArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePaperform.
 */
export interface GetSourcePaperformResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePaperformResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePaperformOutput(args: GetSourcePaperformOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePaperformResult>;
/**
 * A collection of arguments for invoking getSourcePaperform.
 */
export interface GetSourcePaperformOutputArgs {
    sourceId: pulumi.Input<string>;
}
