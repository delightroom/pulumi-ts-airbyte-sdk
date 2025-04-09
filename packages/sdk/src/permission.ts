// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Permission extends pulumi.CustomResource {
    /**
     * Get an existing Permission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionState, opts?: pulumi.CustomResourceOptions): Permission {
        return new Permission(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'airbyte:index/permission:Permission';

    /**
     * Returns true if the given object is an instance of Permission.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Permission {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Permission.__pulumiType;
    }

    /**
     * Requires replacement if changed.
     */
    public readonly organizationId!: pulumi.Output<string>;
    public /*out*/ readonly permissionId!: pulumi.Output<string>;
    /**
     * Subset of `PermissionType` (removing `instance_admin`), could be used in public-api. must be one of
     * ["organization_admin", "organization_editor", "organization_runner", "organization_reader", "organization_member",
     * "workspace_admin", "workspace_editor", "workspace_runner", "workspace_reader"]
     */
    public readonly permissionType!: pulumi.Output<string>;
    /**
     * Internal Airbyte user ID. Requires replacement if changed.
     */
    public readonly userId!: pulumi.Output<string>;
    /**
     * Requires replacement if changed.
     */
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a Permission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PermissionArgs | PermissionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PermissionState | undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["permissionId"] = state ? state.permissionId : undefined;
            resourceInputs["permissionType"] = state ? state.permissionType : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as PermissionArgs | undefined;
            if ((!args || args.permissionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissionType'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["permissionType"] = args ? args.permissionType : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["permissionId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Permission.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
     * ["organization_admin", "organization_editor", "organization_runner", "organization_reader", "organization_member",
     * "workspace_admin", "workspace_editor", "workspace_runner", "workspace_reader"]
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
     * ["organization_admin", "organization_editor", "organization_runner", "organization_reader", "organization_member",
     * "workspace_admin", "workspace_editor", "workspace_runner", "workspace_reader"]
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
