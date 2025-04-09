import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceBunnyInc(args: GetSourceBunnyIncArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBunnyIncResult>;
/**
 * A collection of arguments for invoking getSourceBunnyInc.
 */
export interface GetSourceBunnyIncArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceBunnyInc.
 */
export interface GetSourceBunnyIncResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceBunnyIncResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceBunnyIncOutput(args: GetSourceBunnyIncOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceBunnyIncResult>;
/**
 * A collection of arguments for invoking getSourceBunnyInc.
 */
export interface GetSourceBunnyIncOutputArgs {
    sourceId: pulumi.Input<string>;
}
