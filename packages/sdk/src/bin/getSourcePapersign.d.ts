import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePapersign(args: GetSourcePapersignArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePapersignResult>;
/**
 * A collection of arguments for invoking getSourcePapersign.
 */
export interface GetSourcePapersignArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePapersign.
 */
export interface GetSourcePapersignResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePapersignResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePapersignOutput(args: GetSourcePapersignOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePapersignResult>;
/**
 * A collection of arguments for invoking getSourcePapersign.
 */
export interface GetSourcePapersignOutputArgs {
    sourceId: pulumi.Input<string>;
}
