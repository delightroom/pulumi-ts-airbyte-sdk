import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSmartengage(args: GetSourceSmartengageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSmartengageResult>;
/**
 * A collection of arguments for invoking getSourceSmartengage.
 */
export interface GetSourceSmartengageArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSmartengage.
 */
export interface GetSourceSmartengageResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSmartengageResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSmartengageOutput(args: GetSourceSmartengageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSmartengageResult>;
/**
 * A collection of arguments for invoking getSourceSmartengage.
 */
export interface GetSourceSmartengageOutputArgs {
    sourceId: pulumi.Input<string>;
}
