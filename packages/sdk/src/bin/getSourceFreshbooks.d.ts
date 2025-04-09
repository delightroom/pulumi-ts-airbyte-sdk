import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFreshbooks(args: GetSourceFreshbooksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreshbooksResult>;
/**
 * A collection of arguments for invoking getSourceFreshbooks.
 */
export interface GetSourceFreshbooksArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreshbooks.
 */
export interface GetSourceFreshbooksResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFreshbooksResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFreshbooksOutput(args: GetSourceFreshbooksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreshbooksResult>;
/**
 * A collection of arguments for invoking getSourceFreshbooks.
 */
export interface GetSourceFreshbooksOutputArgs {
    sourceId: pulumi.Input<string>;
}
