import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceUnleash(args: GetSourceUnleashArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceUnleashResult>;
/**
 * A collection of arguments for invoking getSourceUnleash.
 */
export interface GetSourceUnleashArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceUnleash.
 */
export interface GetSourceUnleashResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceUnleashResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceUnleashOutput(args: GetSourceUnleashOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceUnleashResult>;
/**
 * A collection of arguments for invoking getSourceUnleash.
 */
export interface GetSourceUnleashOutputArgs {
    sourceId: pulumi.Input<string>;
}
