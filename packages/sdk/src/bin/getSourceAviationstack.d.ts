import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAviationstack(args: GetSourceAviationstackArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAviationstackResult>;
/**
 * A collection of arguments for invoking getSourceAviationstack.
 */
export interface GetSourceAviationstackArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAviationstack.
 */
export interface GetSourceAviationstackResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAviationstackResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAviationstackOutput(args: GetSourceAviationstackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAviationstackResult>;
/**
 * A collection of arguments for invoking getSourceAviationstack.
 */
export interface GetSourceAviationstackOutputArgs {
    sourceId: pulumi.Input<string>;
}
