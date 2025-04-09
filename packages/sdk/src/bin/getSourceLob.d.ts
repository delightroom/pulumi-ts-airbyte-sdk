import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceLob(args: GetSourceLobArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceLobResult>;
/**
 * A collection of arguments for invoking getSourceLob.
 */
export interface GetSourceLobArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceLob.
 */
export interface GetSourceLobResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceLobResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceLobOutput(args: GetSourceLobOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceLobResult>;
/**
 * A collection of arguments for invoking getSourceLob.
 */
export interface GetSourceLobOutputArgs {
    sourceId: pulumi.Input<string>;
}
