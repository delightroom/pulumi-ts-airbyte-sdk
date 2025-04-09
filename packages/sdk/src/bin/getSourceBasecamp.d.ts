import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBasecamp(args: GetSourceBasecampArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBasecampResult>;
/**
 * A collection of arguments for invoking getSourceBasecamp.
 */
export interface GetSourceBasecampArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBasecamp.
 */
export interface GetSourceBasecampResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBasecampResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBasecampOutput(args: GetSourceBasecampOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBasecampResult>;
/**
 * A collection of arguments for invoking getSourceBasecamp.
 */
export interface GetSourceBasecampOutputArgs {
    sourceId: pulumi.Input<string>;
}
