import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceNorthpassLms(args: GetSourceNorthpassLmsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceNorthpassLmsResult>;
/**
 * A collection of arguments for invoking getSourceNorthpassLms.
 */
export interface GetSourceNorthpassLmsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceNorthpassLms.
 */
export interface GetSourceNorthpassLmsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceNorthpassLmsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceNorthpassLmsOutput(args: GetSourceNorthpassLmsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceNorthpassLmsResult>;
/**
 * A collection of arguments for invoking getSourceNorthpassLms.
 */
export interface GetSourceNorthpassLmsOutputArgs {
    sourceId: pulumi.Input<string>;
}
