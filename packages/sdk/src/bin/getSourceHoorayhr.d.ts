import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceHoorayhr(args: GetSourceHoorayhrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceHoorayhrResult>;
/**
 * A collection of arguments for invoking getSourceHoorayhr.
 */
export interface GetSourceHoorayhrArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceHoorayhr.
 */
export interface GetSourceHoorayhrResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceHoorayhrResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceHoorayhrOutput(args: GetSourceHoorayhrOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceHoorayhrResult>;
/**
 * A collection of arguments for invoking getSourceHoorayhr.
 */
export interface GetSourceHoorayhrOutputArgs {
    sourceId: pulumi.Input<string>;
}
