import * as pulumi from "@pulumi/pulumi";
export declare class DestinationDefinition extends pulumi.CustomResource {
    /**
     * Get an existing DestinationDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationDefinitionState, opts?: pulumi.CustomResourceOptions): DestinationDefinition;
    /**
     * Returns true if the given object is an instance of DestinationDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DestinationDefinition;
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
     * Create a DestinationDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationDefinitionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DestinationDefinition resources.
 */
export interface DestinationDefinitionState {
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
 * The set of arguments for constructing a DestinationDefinition resource.
 */
export interface DestinationDefinitionArgs {
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
