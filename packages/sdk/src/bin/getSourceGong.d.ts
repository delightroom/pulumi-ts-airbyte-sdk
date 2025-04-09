import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceGong(args: GetSourceGongArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGongResult>;
/**
 * A collection of arguments for invoking getSourceGong.
 */
export interface GetSourceGongArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceGong.
 */
export interface GetSourceGongResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceGongResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceGongOutput(args: GetSourceGongOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceGongResult>;
/**
 * A collection of arguments for invoking getSourceGong.
 */
export interface GetSourceGongOutputArgs {
    sourceId: pulumi.Input<string>;
}
