import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNylas(args: GetSourceNylasArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNylasResult>;
/**
 * A collection of arguments for invoking getSourceNylas.
 */
export interface GetSourceNylasArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNylas.
 */
export interface GetSourceNylasResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNylasResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNylasOutput(args: GetSourceNylasOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNylasResult>;
/**
 * A collection of arguments for invoking getSourceNylas.
 */
export interface GetSourceNylasOutputArgs {
    sourceId: pulumi.Input<string>;
}
