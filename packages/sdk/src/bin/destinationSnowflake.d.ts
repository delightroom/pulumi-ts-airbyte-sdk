import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class DestinationSnowflake extends pulumi.CustomResource {
    /**
     * Get an existing DestinationSnowflake resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationSnowflakeState, opts?: pulumi.CustomResourceOptions): DestinationSnowflake;
    /**
     * Returns true if the given object is an instance of DestinationSnowflake.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DestinationSnowflake;
    readonly configuration: pulumi.Output<outputs.DestinationSnowflakeConfiguration>;
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
     * Create a DestinationSnowflake resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationSnowflakeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DestinationSnowflake resources.
 */
export interface DestinationSnowflakeState {
    configuration?: pulumi.Input<inputs.DestinationSnowflakeConfiguration>;
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
 * The set of arguments for constructing a DestinationSnowflake resource.
 */
export interface DestinationSnowflakeArgs {
    configuration: pulumi.Input<inputs.DestinationSnowflakeConfiguration>;
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
