import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceTickettailor(args: GetSourceTickettailorArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceTickettailorResult>;
/**
 * A collection of arguments for invoking getSourceTickettailor.
 */
export interface GetSourceTickettailorArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceTickettailor.
 */
export interface GetSourceTickettailorResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceTickettailorResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceTickettailorOutput(args: GetSourceTickettailorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceTickettailorResult>;
/**
 * A collection of arguments for invoking getSourceTickettailor.
 */
export interface GetSourceTickettailorOutputArgs {
    sourceId: pulumi.Input<string>;
}
