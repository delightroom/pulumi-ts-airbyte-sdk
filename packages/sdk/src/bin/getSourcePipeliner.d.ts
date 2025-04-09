import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePipeliner(args: GetSourcePipelinerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePipelinerResult>;
/**
 * A collection of arguments for invoking getSourcePipeliner.
 */
export interface GetSourcePipelinerArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePipeliner.
 */
export interface GetSourcePipelinerResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePipelinerResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePipelinerOutput(args: GetSourcePipelinerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePipelinerResult>;
/**
 * A collection of arguments for invoking getSourcePipeliner.
 */
export interface GetSourcePipelinerOutputArgs {
    sourceId: pulumi.Input<string>;
}
