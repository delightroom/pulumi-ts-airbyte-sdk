import * as pulumi from "@pulumi/pulumi";
export declare function getPermission(args: GetPermissionArgs, opts?: pulumi.InvokeOptions): Promise<GetPermissionResult>;
/**
 * A collection of arguments for invoking getPermission.
 */
export interface GetPermissionArgs {
    permissionId: string;
}
/**
 * A collection of values returned by getPermission.
 */
export interface GetPermissionResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly organizationId: string;
    readonly permissionId: string;
    readonly permissionType: string;
    readonly userId: string;
    readonly workspaceId: string;
}
export declare function getPermissionOutput(args: GetPermissionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPermissionResult>;
/**
 * A collection of arguments for invoking getPermission.
 */
export interface GetPermissionOutputArgs {
    permissionId: pulumi.Input<string>;
}
//# sourceMappingURL=getPermission.d.ts.map