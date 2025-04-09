import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOnfleet(args: GetSourceOnfleetArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOnfleetResult>;
/**
 * A collection of arguments for invoking getSourceOnfleet.
 */
export interface GetSourceOnfleetArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOnfleet.
 */
export interface GetSourceOnfleetResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOnfleetResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOnfleetOutput(args: GetSourceOnfleetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOnfleetResult>;
/**
 * A collection of arguments for invoking getSourceOnfleet.
 */
export interface GetSourceOnfleetOutputArgs {
    sourceId: pulumi.Input<string>;
}
