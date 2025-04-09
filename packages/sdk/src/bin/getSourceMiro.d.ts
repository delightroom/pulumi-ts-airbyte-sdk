import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceMiro(args: GetSourceMiroArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceMiroResult>;
/**
 * A collection of arguments for invoking getSourceMiro.
 */
export interface GetSourceMiroArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceMiro.
 */
export interface GetSourceMiroResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceMiroResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceMiroOutput(args: GetSourceMiroOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceMiroResult>;
/**
 * A collection of arguments for invoking getSourceMiro.
 */
export interface GetSourceMiroOutputArgs {
    sourceId: pulumi.Input<string>;
}
