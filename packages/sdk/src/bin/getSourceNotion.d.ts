import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNotion(args: GetSourceNotionArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNotionResult>;
/**
 * A collection of arguments for invoking getSourceNotion.
 */
export interface GetSourceNotionArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNotion.
 */
export interface GetSourceNotionResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNotionResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNotionOutput(args: GetSourceNotionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNotionResult>;
/**
 * A collection of arguments for invoking getSourceNotion.
 */
export interface GetSourceNotionOutputArgs {
    sourceId: pulumi.Input<string>;
}
