import * as pulumi from "@pulumi/pulumi";
export declare class SourceDefinition extends pulumi.CustomResource {
    /**
     * Get an existing SourceDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceDefinitionState, opts?: pulumi.CustomResourceOptions): SourceDefinition;
    /**
     * Returns true if the given object is an instance of SourceDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SourceDefinition;
    readonly dockerImageTag: pulumi.Output<string>;
    /**
     * Requires replacement if changed.
     */
    readonly dockerRepository: pulumi.Output<string>;
    /**
     * Requires replacement if changed.
     */
    readonly documentationUrl: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a SourceDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceDefinitionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SourceDefinition resources.
 */
export interface SourceDefinitionState {
    dockerImageTag?: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    dockerRepository?: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    documentationUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SourceDefinition resource.
 */
export interface SourceDefinitionArgs {
    dockerImageTag: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    dockerRepository: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    documentationUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
