import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBox(args: GetSourceBoxArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBoxResult>;
/**
 * A collection of arguments for invoking getSourceBox.
 */
export interface GetSourceBoxArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBox.
 */
export interface GetSourceBoxResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBoxResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBoxOutput(args: GetSourceBoxOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBoxResult>;
/**
 * A collection of arguments for invoking getSourceBox.
 */
export interface GetSourceBoxOutputArgs {
    sourceId: pulumi.Input<string>;
}
