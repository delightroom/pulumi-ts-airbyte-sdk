import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWorkramp(args: GetSourceWorkrampArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWorkrampResult>;
/**
 * A collection of arguments for invoking getSourceWorkramp.
 */
export interface GetSourceWorkrampArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWorkramp.
 */
export interface GetSourceWorkrampResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWorkrampResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWorkrampOutput(args: GetSourceWorkrampOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWorkrampResult>;
/**
 * A collection of arguments for invoking getSourceWorkramp.
 */
export interface GetSourceWorkrampOutputArgs {
    sourceId: pulumi.Input<string>;
}
