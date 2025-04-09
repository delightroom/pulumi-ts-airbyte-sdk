import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SourceGithub extends pulumi.CustomResource {
    /**
     * Get an existing SourceGithub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceGithubState, opts?: pulumi.CustomResourceOptions): SourceGithub;
    /**
     * Returns true if the given object is an instance of SourceGithub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SourceGithub;
    readonly configuration: pulumi.Output<outputs.SourceGithubConfiguration>;
    readonly createdAt: pulumi.Output<number>;
    /**
     * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires
     * replacement if changed.
     */
    readonly definitionId: pulumi.Output<string>;
    /**
     * Name of the source e.g. dev-mysql-instance.
     */
    readonly name: pulumi.Output<string>;
    /**
     * actor or actor definition specific resource requirements. if default is set, these are the requirements that should be
     * set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the
     * platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    readonly resourceAllocation: pulumi.Output<outputs.SourceGithubResourceAllocation>;
    /**
     * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
     */
    readonly secretId: pulumi.Output<string | undefined>;
    readonly sourceId: pulumi.Output<string>;
    readonly sourceType: pulumi.Output<string>;
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a SourceGithub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceGithubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SourceGithub resources.
 */
export interface SourceGithubState {
    configuration?: pulumi.Input<inputs.SourceGithubConfiguration>;
    createdAt?: pulumi.Input<number>;
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
     * actor or actor definition specific resource requirements. if default is set, these are the requirements that should be
     * set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the
     * platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    resourceAllocation?: pulumi.Input<inputs.SourceGithubResourceAllocation>;
    /**
     * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
     */
    secretId?: pulumi.Input<string>;
    sourceId?: pulumi.Input<string>;
    sourceType?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SourceGithub resource.
 */
export interface SourceGithubArgs {
    configuration: pulumi.Input<inputs.SourceGithubConfiguration>;
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
