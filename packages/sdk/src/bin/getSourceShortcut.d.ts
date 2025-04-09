import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSourceShortcut(args: GetSourceShortcutArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceShortcutResult>;
/**
 * A collection of arguments for invoking getSourceShortcut.
 */
export interface GetSourceShortcutArgs {
    sourceId: string;
}
/**
 * A collection of values returned by getSourceShortcut.
 */
export interface GetSourceShortcutResult {
    readonly configuration: string;
    readonly createdAt: number;
    readonly definitionId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceAllocation: outputs.GetSourceShortcutResourceAllocation;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export declare function getSourceShortcutOutput(args: GetSourceShortcutOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceShortcutResult>;
/**
 * A collection of arguments for invoking getSourceShortcut.
 */
export interface GetSourceShortcutOutputArgs {
    sourceId: pulumi.Input<string>;
}
