import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceInstagram(args: GetSourceInstagramArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceInstagramResult>;
/**
 * A collection of arguments for invoking getSourceInstagram.
 */
export interface GetSourceInstagramArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceInstagram.
 */
export interface GetSourceInstagramResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceInstagramResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceInstagramOutput(args: GetSourceInstagramOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceInstagramResult>;
/**
 * A collection of arguments for invoking getSourceInstagram.
 */
export interface GetSourceInstagramOutputArgs {
    sourceId: pulumi.Input<string>;
}
