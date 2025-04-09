import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourcePretix(args: GetSourcePretixArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePretixResult>;
/**
 * A collection of arguments for invoking getSourcePretix.
 */
export interface GetSourcePretixArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourcePretix.
 */
export interface GetSourcePretixResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourcePretixResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourcePretixOutput(args: GetSourcePretixOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourcePretixResult>;
/**
 * A collection of arguments for invoking getSourcePretix.
 */
export interface GetSourcePretixOutputArgs {
    sourceId: pulumi.Input<string>;
}
