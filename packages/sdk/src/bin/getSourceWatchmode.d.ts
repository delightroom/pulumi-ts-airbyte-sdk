import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceWatchmode(args: GetSourceWatchmodeArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWatchmodeResult>;
/**
 * A collection of arguments for invoking getSourceWatchmode.
 */
export interface GetSourceWatchmodeArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceWatchmode.
 */
export interface GetSourceWatchmodeResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceWatchmodeResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceWatchmodeOutput(args: GetSourceWatchmodeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceWatchmodeResult>;
/**
 * A collection of arguments for invoking getSourceWatchmode.
 */
export interface GetSourceWatchmodeOutputArgs {
    sourceId: pulumi.Input<string>;
}
