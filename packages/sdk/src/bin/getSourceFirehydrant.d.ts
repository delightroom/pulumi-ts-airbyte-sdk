import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFirehydrant(args: GetSourceFirehydrantArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFirehydrantResult>;
/**
 * A collection of arguments for invoking getSourceFirehydrant.
 */
export interface GetSourceFirehydrantArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFirehydrant.
 */
export interface GetSourceFirehydrantResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFirehydrantResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFirehydrantOutput(args: GetSourceFirehydrantOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFirehydrantResult>;
/**
 * A collection of arguments for invoking getSourceFirehydrant.
 */
export interface GetSourceFirehydrantOutputArgs {
    sourceId: pulumi.Input<string>;
}
