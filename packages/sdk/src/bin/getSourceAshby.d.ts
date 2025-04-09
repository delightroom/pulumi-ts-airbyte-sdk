import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAshby(args: GetSourceAshbyArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAshbyResult>;
/**
 * A collection of arguments for invoking getSourceAshby.
 */
export interface GetSourceAshbyArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAshby.
 */
export interface GetSourceAshbyResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAshbyResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAshbyOutput(args: GetSourceAshbyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAshbyResult>;
/**
 * A collection of arguments for invoking getSourceAshby.
 */
export interface GetSourceAshbyOutputArgs {
    sourceId: pulumi.Input<string>;
}
