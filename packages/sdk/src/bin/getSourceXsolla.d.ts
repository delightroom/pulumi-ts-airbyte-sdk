import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceXsolla(args: GetSourceXsollaArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceXsollaResult>;
/**
 * A collection of arguments for invoking getSourceXsolla.
 */
export interface GetSourceXsollaArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceXsolla.
 */
export interface GetSourceXsollaResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceXsollaResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceXsollaOutput(args: GetSourceXsollaOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceXsollaResult>;
/**
 * A collection of arguments for invoking getSourceXsolla.
 */
export interface GetSourceXsollaOutputArgs {
    sourceId: pulumi.Input<string>;
}
