import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOveit(args: GetSourceOveitArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOveitResult>;
/**
 * A collection of arguments for invoking getSourceOveit.
 */
export interface GetSourceOveitArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOveit.
 */
export interface GetSourceOveitResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOveitResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOveitOutput(args: GetSourceOveitOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOveitResult>;
/**
 * A collection of arguments for invoking getSourceOveit.
 */
export interface GetSourceOveitOutputArgs {
    sourceId: pulumi.Input<string>;
}
