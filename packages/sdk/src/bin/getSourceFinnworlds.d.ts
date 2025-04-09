import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceFinnworlds(args: GetSourceFinnworldsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFinnworldsResult>;
/**
 * A collection of arguments for invoking getSourceFinnworlds.
 */
export interface GetSourceFinnworldsArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceFinnworlds.
 */
export interface GetSourceFinnworldsResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceFinnworldsResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceFinnworldsOutput(args: GetSourceFinnworldsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceFinnworldsResult>;
/**
 * A collection of arguments for invoking getSourceFinnworlds.
 */
export interface GetSourceFinnworldsOutputArgs {
    sourceId: pulumi.Input<string>;
}
