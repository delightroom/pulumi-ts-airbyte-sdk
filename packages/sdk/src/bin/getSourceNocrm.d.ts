import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNocrm(args: GetSourceNocrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNocrmResult>;
/**
 * A collection of arguments for invoking getSourceNocrm.
 */
export interface GetSourceNocrmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNocrm.
 */
export interface GetSourceNocrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNocrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNocrmOutput(args: GetSourceNocrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNocrmResult>;
/**
 * A collection of arguments for invoking getSourceNocrm.
 */
export interface GetSourceNocrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
