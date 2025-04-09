import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHighLevel(args: GetSourceHighLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHighLevelResult>;
/**
 * A collection of arguments for invoking getSourceHighLevel.
 */
export interface GetSourceHighLevelArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHighLevel.
 */
export interface GetSourceHighLevelResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHighLevelResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHighLevelOutput(args: GetSourceHighLevelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHighLevelResult>;
/**
 * A collection of arguments for invoking getSourceHighLevel.
 */
export interface GetSourceHighLevelOutputArgs {
    sourceId: pulumi.Input<string>;
}
