import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceAppcues(args: GetSourceAppcuesArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAppcuesResult>;
/**
 * A collection of arguments for invoking getSourceAppcues.
 */
export interface GetSourceAppcuesArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceAppcues.
 */
export interface GetSourceAppcuesResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceAppcuesResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceAppcuesOutput(args: GetSourceAppcuesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceAppcuesResult>;
/**
 * A collection of arguments for invoking getSourceAppcues.
 */
export interface GetSourceAppcuesOutputArgs {
    sourceId: pulumi.Input<string>;
}
