import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceUbidots(args: GetSourceUbidotsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceUbidotsResult>;
/**
 * A collection of arguments for invoking getSourceUbidots.
 */
export interface GetSourceUbidotsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceUbidots.
 */
export interface GetSourceUbidotsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceUbidotsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceUbidotsOutput(args: GetSourceUbidotsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceUbidotsResult>;
/**
 * A collection of arguments for invoking getSourceUbidots.
 */
export interface GetSourceUbidotsOutputArgs {
    sourceId: pulumi.Input<string>;
}
