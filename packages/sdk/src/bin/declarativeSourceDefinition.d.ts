import * as pulumi from "@pulumi/pulumi";
export declare class DeclarativeSourceDefinition extends pulumi.CustomResource {
    /**
     * Get an existing DeclarativeSourceDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeclarativeSourceDefinitionState, opts?: pulumi.CustomResourceOptions): DeclarativeSourceDefinition;
    /**
     * Returns true if the given object is an instance of DeclarativeSourceDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DeclarativeSourceDefinition;
    /**
     * Low code CDK manifest JSON object. Parsed as JSON.
     */
    readonly manifest: pulumi.Output<string>;
    /**
     * Requires replacement if changed.
     */
    readonly name: pulumi.Output<string>;
    readonly version: pulumi.Output<number>;
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a DeclarativeSourceDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeclarativeSourceDefinitionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DeclarativeSourceDefinition resources.
 */
export interface DeclarativeSourceDefinitionState {
    /**
     * Low code CDK manifest JSON object. Parsed as JSON.
     */
    manifest?: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    name?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DeclarativeSourceDefinition resource.
 */
export interface DeclarativeSourceDefinitionArgs {
    /**
     * Low code CDK manifest JSON object. Parsed as JSON.
     */
    manifest: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    name?: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
