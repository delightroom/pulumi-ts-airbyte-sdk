import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceLinnworks(args: GetSourceLinnworksArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLinnworksResult>;
/**
 * A collection of arguments for invoking getSourceLinnworks.
 */
export interface GetSourceLinnworksArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLinnworks.
 */
export interface GetSourceLinnworksResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLinnworksResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLinnworksOutput(args: GetSourceLinnworksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLinnworksResult>;
/**
 * A collection of arguments for invoking getSourceLinnworks.
 */
export interface GetSourceLinnworksOutputArgs {
    sourceId: pulumi.Input<string>;
}
