import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAssemblyai(args: GetSourceAssemblyaiArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAssemblyaiResult>;
/**
 * A collection of arguments for invoking getSourceAssemblyai.
 */
export interface GetSourceAssemblyaiArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAssemblyai.
 */
export interface GetSourceAssemblyaiResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAssemblyaiResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAssemblyaiOutput(args: GetSourceAssemblyaiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAssemblyaiResult>;
/**
 * A collection of arguments for invoking getSourceAssemblyai.
 */
export interface GetSourceAssemblyaiOutputArgs {
    sourceId: pulumi.Input<string>;
}
