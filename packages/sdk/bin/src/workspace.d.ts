import * as pulumi from "@pulumi/pulumi";
export declare class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceState, opts?: pulumi.CustomResourceOptions): Workspace;
    /** @internal */
    static readonly __pulumiType = "airbyte:index/workspace:Workspace";
    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workspace;
    /**
     * must be one of ["auto", "us", "eu"]
     */
    readonly dataResidency: pulumi.Output<string>;
    /**
     * Name of the workspace
     */
    readonly name: pulumi.Output<string>;
    /**
     * ID of organization to add workspace to. Requires replacement if changed.
     */
    readonly organizationId: pulumi.Output<string | undefined>;
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkspaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Workspace resources.
 */
export interface WorkspaceState {
    /**
     * must be one of ["auto", "us", "eu"]
     */
    dataResidency?: pulumi.Input<string>;
    /**
     * Name of the workspace
     */
    name?: pulumi.Input<string>;
    /**
     * ID of organization to add workspace to. Requires replacement if changed.
     */
    organizationId?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * Name of the workspace
     */
    name?: pulumi.Input<string>;
    /**
     * ID of organization to add workspace to. Requires replacement if changed.
     */
    organizationId?: pulumi.Input<string>;
}
//# sourceMappingURL=workspace.d.ts.map