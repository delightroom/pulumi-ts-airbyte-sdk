import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMicrosoftEntraId(args: GetSourceMicrosoftEntraIdArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMicrosoftEntraIdResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftEntraId.
 */
export interface GetSourceMicrosoftEntraIdArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMicrosoftEntraId.
 */
export interface GetSourceMicrosoftEntraIdResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMicrosoftEntraIdResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMicrosoftEntraIdOutput(args: GetSourceMicrosoftEntraIdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMicrosoftEntraIdResult>;
/**
 * A collection of arguments for invoking getSourceMicrosoftEntraId.
 */
export interface GetSourceMicrosoftEntraIdOutputArgs {
    sourceId: pulumi.Input<string>;
}
