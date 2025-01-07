import * as pulumi from "@pulumi/pulumi";
export declare class Permission extends pulumi.CustomResource {
    /**
     * Get an existing Permission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionState, opts?: pulumi.CustomResourceOptions): Permission;
    /**
     * Returns true if the given object is an instance of Permission.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Permission;
    /**
     * Requires replacement if changed.
     */
    readonly organizationId: pulumi.Output<string>;
    readonly permissionId: pulumi.Output<string>;
    /**
     * Subset of `PermissionType` (removing `instance_admin`), could be used in public-api. must be one of
     * ["organization_admin", "organization_editor", "organization_reader", "organization_member", "workspace_admin",
     * "workspace_editor", "workspace_reader"]
     */
    readonly permissionType: pulumi.Output<string>;
    /**
     * Internal Airbyte user ID. Requires replacement if changed.
     */
    readonly userId: pulumi.Output<string>;
    /**
     * Requires replacement if changed.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a Permission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Permission resources.
 */
export interface PermissionState {
    /**
     * Requires replacement if changed.
     */
    organizationId?: pulumi.Input<string>;
    permissionId?: pulumi.Input<string>;
    /**
     * Subset of `PermissionType` (removing `instance_admin`), could be used in public-api. must be one of
     * ["organization_admin", "organization_editor", "organization_reader", "organization_member", "workspace_admin",
     * "workspace_editor", "workspace_reader"]
     */
    permissionType?: pulumi.Input<string>;
    /**
     * Internal Airbyte user ID. Requires replacement if changed.
     */
    userId?: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Permission resource.
 */
export interface PermissionArgs {
    /**
     * Requires replacement if changed.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * Subset of `PermissionType` (removing `instance_admin`), could be used in public-api. must be one of
     * ["organization_admin", "organization_editor", "organization_reader", "organization_member", "workspace_admin",
     * "workspace_editor", "workspace_reader"]
     */
    permissionType: pulumi.Input<string>;
    /**
     * Internal Airbyte user ID. Requires replacement if changed.
     */
    userId: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    workspaceId?: pulumi.Input<string>;
}
