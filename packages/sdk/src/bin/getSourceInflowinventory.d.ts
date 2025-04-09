import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceInflowinventory(args: GetSourceInflowinventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInflowinventoryResult>;
/**
 * A collection of arguments for invoking getSourceInflowinventory.
 */
export interface GetSourceInflowinventoryArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInflowinventory.
 */
export interface GetSourceInflowinventoryResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceInflowinventoryResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceInflowinventoryOutput(args: GetSourceInflowinventoryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInflowinventoryResult>;
/**
 * A collection of arguments for invoking getSourceInflowinventory.
 */
export interface GetSourceInflowinventoryOutputArgs {
    sourceId: pulumi.Input<string>;
}
