import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class DestinationQdrant extends pulumi.CustomResource {
    /**
     * Get an existing DestinationQdrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationQdrantState, opts?: pulumi.CustomResourceOptions): DestinationQdrant;
    /** @internal */
    static readonly __pulumiType = "airbyte:index/destinationQdrant:DestinationQdrant";
    /**
     * Returns true if the given object is an instance of DestinationQdrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DestinationQdrant;
    /**
     * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination
     * configuration, as well as to provide type safety for the configuration passed to the destination. The configuration
     * model is composed of four parts: * Processing configuration * Embedding configuration * Indexing configuration *
     * Advanced configuration Processing, embedding and advanced configuration are provided by this base class, while the
     * indexing configuration is provided by the destination connector in the sub class.
     */
    readonly configuration: pulumi.Output<outputs.DestinationQdrantConfiguration>;
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
     * Create a DestinationQdrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationQdrantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DestinationQdrant resources.
 */
export interface DestinationQdrantState {
    /**
     * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination
     * configuration, as well as to provide type safety for the configuration passed to the destination. The configuration
     * model is composed of four parts: * Processing configuration * Embedding configuration * Indexing configuration *
     * Advanced configuration Processing, embedding and advanced configuration are provided by this base class, while the
     * indexing configuration is provided by the destination connector in the sub class.
     */
    configuration?: pulumi.Input<inputs.DestinationQdrantConfiguration>;
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
 * The set of arguments for constructing a DestinationQdrant resource.
 */
export interface DestinationQdrantArgs {
    /**
     * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination
     * configuration, as well as to provide type safety for the configuration passed to the destination. The configuration
     * model is composed of four parts: * Processing configuration * Embedding configuration * Indexing configuration *
     * Advanced configuration Processing, embedding and advanced configuration are provided by this base class, while the
     * indexing configuration is provided by the destination connector in the sub class.
     */
    configuration: pulumi.Input<inputs.DestinationQdrantConfiguration>;
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
//# sourceMappingURL=destinationQdrant.d.ts.map