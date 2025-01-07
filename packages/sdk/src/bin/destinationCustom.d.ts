import * as pulumi from "@pulumi/pulumi";
export declare class DestinationCustom extends pulumi.CustomResource {
    /**
     * Get an existing DestinationCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationCustomState, opts?: pulumi.CustomResourceOptions): DestinationCustom;
    /**
     * Returns true if the given object is an instance of DestinationCustom.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DestinationCustom;
    /**
     * The values required to configure the destination. Parsed as JSON.
     */
    readonly configuration: pulumi.Output<string>;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires
     * replacement if changed.
     */
    readonly definitionId: pulumi.Output<string | undefined>;
    readonly destinationId: pulumi.Output<string>;
    readonly destinationType: pulumi.Output<string>;
    /**
     * Name of the destination e.g. dev-mysql-instance.
     */
    readonly name: pulumi.Output<string>;
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a DestinationCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationCustomArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DestinationCustom resources.
 */
export interface DestinationCustomState {
    /**
     * The values required to configure the destination. Parsed as JSON.
     */
    configuration?: pulumi.Input<string>;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires
     * replacement if changed.
     */
    definitionId?: pulumi.Input<string>;
    destinationId?: pulumi.Input<string>;
    destinationType?: pulumi.Input<string>;
    /**
     * Name of the destination e.g. dev-mysql-instance.
     */
    name?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DestinationCustom resource.
 */
export interface DestinationCustomArgs {
    /**
     * The values required to configure the destination. Parsed as JSON.
     */
    configuration: pulumi.Input<string>;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires
     * replacement if changed.
     */
    definitionId?: pulumi.Input<string>;
    /**
     * Name of the destination e.g. dev-mysql-instance.
     */
    name?: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
