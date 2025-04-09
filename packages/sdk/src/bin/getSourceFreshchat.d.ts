import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFreshchat(args: GetSourceFreshchatArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFreshchatResult>;
/**
 * A collection of arguments for invoking getSourceFreshchat.
 */
export interface GetSourceFreshchatArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFreshchat.
 */
export interface GetSourceFreshchatResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFreshchatResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFreshchatOutput(args: GetSourceFreshchatOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFreshchatResult>;
/**
 * A collection of arguments for invoking getSourceFreshchat.
 */
export interface GetSourceFreshchatOutputArgs {
    sourceId: pulumi.Input<string>;
}
