import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceOncehub(args: GetSourceOncehubArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceOncehubResult>;
/**
 * A collection of arguments for invoking getSourceOncehub.
 */
export interface GetSourceOncehubArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceOncehub.
 */
export interface GetSourceOncehubResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceOncehubResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceOncehubOutput(args: GetSourceOncehubOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceOncehubResult>;
/**
 * A collection of arguments for invoking getSourceOncehub.
 */
export interface GetSourceOncehubOutputArgs {
    sourceId: pulumi.Input<string>;
}
