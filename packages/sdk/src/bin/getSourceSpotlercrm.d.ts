import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceSpotlercrm(args: GetSourceSpotlercrmArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSpotlercrmResult>;
/**
 * A collection of arguments for invoking getSourceSpotlercrm.
 */
export interface GetSourceSpotlercrmArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceSpotlercrm.
 */
export interface GetSourceSpotlercrmResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceSpotlercrmResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceSpotlercrmOutput(args: GetSourceSpotlercrmOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceSpotlercrmResult>;
/**
 * A collection of arguments for invoking getSourceSpotlercrm.
 */
export interface GetSourceSpotlercrmOutputArgs {
    sourceId: pulumi.Input<string>;
}
