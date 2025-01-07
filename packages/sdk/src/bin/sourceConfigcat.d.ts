import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SourceConfigcat extends pulumi.CustomResource {
    /**
     * Get an existing SourceConfigcat resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceConfigcatState, opts?: pulumi.CustomResourceOptions): SourceConfigcat;
    /**
     * Returns true if the given object is an instance of SourceConfigcat.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SourceConfigcat;
    readonly configuration: pulumi.Output<outputs.SourceConfigcatConfiguration>;
    /**
     * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires
     * replacement if changed.
     */
    readonly definitionId: pulumi.Output<string | undefined>;
    /**
     * Name of the source e.g. dev-mysql-instance.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
     */
    readonly secretId: pulumi.Output<string | undefined>;
    readonly sourceId: pulumi.Output<string>;
    readonly sourceType: pulumi.Output<string>;
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a SourceConfigcat resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceConfigcatArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SourceConfigcat resources.
 */
export interface SourceConfigcatState {
    configuration?: pulumi.Input<inputs.SourceConfigcatConfiguration>;
    /**
     * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires
     * replacement if changed.
     */
    definitionId?: pulumi.Input<string>;
    /**
     * Name of the source e.g. dev-mysql-instance.
     */
    name?: pulumi.Input<string>;
    /**
     * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
     */
    secretId?: pulumi.Input<string>;
    sourceId?: pulumi.Input<string>;
    sourceType?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SourceConfigcat resource.
 */
export interface SourceConfigcatArgs {
    configuration: pulumi.Input<inputs.SourceConfigcatConfiguration>;
    /**
     * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires
     * replacement if changed.
     */
    definitionId?: pulumi.Input<string>;
    /**
     * Name of the source e.g. dev-mysql-instance.
     */
    name?: pulumi.Input<string>;
    /**
     * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
     */
    secretId?: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
