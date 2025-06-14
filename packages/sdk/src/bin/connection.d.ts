import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Connection extends pulumi.CustomResource {
    /**
     * Get an existing Connection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionState, opts?: pulumi.CustomResourceOptions): Connection;
    /**
     * Returns true if the given object is an instance of Connection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Connection;
    /**
     * A list of configured stream options for a connection.
     */
    readonly configurations: pulumi.Output<outputs.ConnectionConfigurations>;
    readonly connectionId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<number>;
    /**
     * @deprecated Deprecated
     */
    readonly dataResidency: pulumi.Output<string | undefined>;
    /**
     * Requires replacement if changed.
     */
    readonly destinationId: pulumi.Output<string>;
    /**
     * Optional name of the connection
     */
    readonly name: pulumi.Output<string>;
    /**
     * Define the location where the data will be stored in the destination. Default: "destination"; must be one of ["source",
     * "destination", "custom_format"]
     */
    readonly namespaceDefinition: pulumi.Output<string>;
    /**
     * Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If
     * "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
     */
    readonly namespaceFormat: pulumi.Output<string>;
    /**
     * Set how Airbyte handles syncs when it detects a non-breaking schema change in the source. Default: "ignore"; must be one
     * of ["ignore", "disable_connection", "propagate_columns", "propagate_fully"]
     */
    readonly nonBreakingSchemaUpdatesBehavior: pulumi.Output<string>;
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_”
     * causes “projects” => “airbyte_projects”). Default: ""
     */
    readonly prefix: pulumi.Output<string>;
    /**
     * schedule for when the the connection should run, per the schedule type
     */
    readonly schedule: pulumi.Output<outputs.ConnectionSchedule>;
    /**
     * Requires replacement if changed.
     */
    readonly sourceId: pulumi.Output<string>;
    /**
     * must be one of ["active", "inactive", "deprecated"]
     */
    readonly status: pulumi.Output<string>;
    readonly tags: pulumi.Output<outputs.ConnectionTag[]>;
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a Connection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Connection resources.
 */
export interface ConnectionState {
    /**
     * A list of configured stream options for a connection.
     */
    configurations?: pulumi.Input<inputs.ConnectionConfigurations>;
    connectionId?: pulumi.Input<string>;
    createdAt?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    dataResidency?: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    destinationId?: pulumi.Input<string>;
    /**
     * Optional name of the connection
     */
    name?: pulumi.Input<string>;
    /**
     * Define the location where the data will be stored in the destination. Default: "destination"; must be one of ["source",
     * "destination", "custom_format"]
     */
    namespaceDefinition?: pulumi.Input<string>;
    /**
     * Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If
     * "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
     */
    namespaceFormat?: pulumi.Input<string>;
    /**
     * Set how Airbyte handles syncs when it detects a non-breaking schema change in the source. Default: "ignore"; must be one
     * of ["ignore", "disable_connection", "propagate_columns", "propagate_fully"]
     */
    nonBreakingSchemaUpdatesBehavior?: pulumi.Input<string>;
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_”
     * causes “projects” => “airbyte_projects”). Default: ""
     */
    prefix?: pulumi.Input<string>;
    /**
     * schedule for when the the connection should run, per the schedule type
     */
    schedule?: pulumi.Input<inputs.ConnectionSchedule>;
    /**
     * Requires replacement if changed.
     */
    sourceId?: pulumi.Input<string>;
    /**
     * must be one of ["active", "inactive", "deprecated"]
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ConnectionTag>[]>;
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Connection resource.
 */
export interface ConnectionArgs {
    /**
     * A list of configured stream options for a connection.
     */
    configurations?: pulumi.Input<inputs.ConnectionConfigurations>;
    /**
     * @deprecated Deprecated
     */
    dataResidency?: pulumi.Input<string>;
    /**
     * Requires replacement if changed.
     */
    destinationId: pulumi.Input<string>;
    /**
     * Optional name of the connection
     */
    name?: pulumi.Input<string>;
    /**
     * Define the location where the data will be stored in the destination. Default: "destination"; must be one of ["source",
     * "destination", "custom_format"]
     */
    namespaceDefinition?: pulumi.Input<string>;
    /**
     * Used when namespaceDefinition is 'custom_format'. If blank then behaves like namespaceDefinition = 'destination'. If
     * "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
     */
    namespaceFormat?: pulumi.Input<string>;
    /**
     * Set how Airbyte handles syncs when it detects a non-breaking schema change in the source. Default: "ignore"; must be one
     * of ["ignore", "disable_connection", "propagate_columns", "propagate_fully"]
     */
    nonBreakingSchemaUpdatesBehavior?: pulumi.Input<string>;
    /**
     * Prefix that will be prepended to the name of each stream when it is written to the destination (ex. “airbyte_”
     * causes “projects” => “airbyte_projects”). Default: ""
     */
    prefix?: pulumi.Input<string>;
    /**
     * schedule for when the the connection should run, per the schedule type
     */
    schedule?: pulumi.Input<inputs.ConnectionSchedule>;
    /**
     * Requires replacement if changed.
     */
    sourceId: pulumi.Input<string>;
    /**
     * must be one of ["active", "inactive", "deprecated"]
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ConnectionTag>[]>;
}
