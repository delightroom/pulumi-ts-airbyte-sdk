import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult>;
/**
 * A collection of arguments for invoking getWorkspace.
 */
export interface GetWorkspaceArgs {
    workspaceId: string;
}
/**
 * A collection of values returned by getWorkspace.
 */
export interface GetWorkspaceResult {
    readonly dataResidency: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly notifications: outputs.GetWorkspaceNotifications;
    readonly workspaceId: string;
}
export declare function getWorkspaceOutput(args: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceResult>;
/**
 * A collection of arguments for invoking getWorkspace.
 */
export interface GetWorkspaceOutputArgs {
    workspaceId: pulumi.Input<string>;
}
