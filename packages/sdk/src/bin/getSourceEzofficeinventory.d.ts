import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEzofficeinventory(args: GetSourceEzofficeinventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEzofficeinventoryResult>;
/**
 * A collection of arguments for invoking getSourceEzofficeinventory.
 */
export interface GetSourceEzofficeinventoryArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEzofficeinventory.
 */
export interface GetSourceEzofficeinventoryResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEzofficeinventoryResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEzofficeinventoryOutput(args: GetSourceEzofficeinventoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEzofficeinventoryResult>;
/**
 * A collection of arguments for invoking getSourceEzofficeinventory.
 */
export interface GetSourceEzofficeinventoryOutputArgs {
    sourceId: pulumi.Input<string>;
}
