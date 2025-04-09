import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceEventbrite(args: GetSourceEventbriteArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEventbriteResult>;
/**
 * A collection of arguments for invoking getSourceEventbrite.
 */
export interface GetSourceEventbriteArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceEventbrite.
 */
export interface GetSourceEventbriteResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceEventbriteResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceEventbriteOutput(args: GetSourceEventbriteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceEventbriteResult>;
/**
 * A collection of arguments for invoking getSourceEventbrite.
 */
export interface GetSourceEventbriteOutputArgs {
    sourceId: pulumi.Input<string>;
}
