import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePardot(args: GetSourcePardotArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePardotResult>;
/**
 * A collection of arguments for invoking getSourcePardot.
 */
export interface GetSourcePardotArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePardot.
 */
export interface GetSourcePardotResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePardotResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePardotOutput(args: GetSourcePardotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePardotResult>;
/**
 * A collection of arguments for invoking getSourcePardot.
 */
export interface GetSourcePardotOutputArgs {
    sourceId: pulumi.Input<string>;
}
