import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePoplar(args: GetSourcePoplarArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePoplarResult>;
/**
 * A collection of arguments for invoking getSourcePoplar.
 */
export interface GetSourcePoplarArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePoplar.
 */
export interface GetSourcePoplarResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePoplarResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePoplarOutput(args: GetSourcePoplarOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePoplarResult>;
/**
 * A collection of arguments for invoking getSourcePoplar.
 */
export interface GetSourcePoplarOutputArgs {
    sourceId: pulumi.Input<string>;
}
