import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceQuickbooks(args: GetSourceQuickbooksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceQuickbooksResult>;
/**
 * A collection of arguments for invoking getSourceQuickbooks.
 */
export interface GetSourceQuickbooksArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceQuickbooks.
 */
export interface GetSourceQuickbooksResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceQuickbooksResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceQuickbooksOutput(args: GetSourceQuickbooksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceQuickbooksResult>;
/**
 * A collection of arguments for invoking getSourceQuickbooks.
 */
export interface GetSourceQuickbooksOutputArgs {
    sourceId: pulumi.Input<string>;
}
