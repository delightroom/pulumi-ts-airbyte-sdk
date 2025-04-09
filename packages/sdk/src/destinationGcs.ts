// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DestinationGcs extends pulumi.CustomResource {
    /**
     * Get an existing DestinationGcs resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationGcsState, opts?: pulumi.CustomResourceOptions): DestinationGcs {
        return new DestinationGcs(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'airbyte:index/destinationGcs:DestinationGcs';

    /**
     * Returns true if the given object is an instance of DestinationGcs.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DestinationGcs {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DestinationGcs.__pulumiType;
    }

    public readonly configuration!: pulumi.Output<outputs.DestinationGcsConfiguration>;
    public /*out*/ readonly createdAt!: pulumi.Output<number>;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires
     * replacement if changed.
     */
    public readonly definitionId!: pulumi.Output<string>;
    public /*out*/ readonly destinationId!: pulumi.Output<string>;
    public /*out*/ readonly destinationType!: pulumi.Output<string>;
    /**
     * Name of the destination e.g. dev-mysql-instance.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * actor or actor definition specific resource requirements. if default is set, these are the requirements that should be
     * set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the
     * platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    public /*out*/ readonly resourceAllocation!: pulumi.Output<outputs.DestinationGcsResourceAllocation>;
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a DestinationGcs resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationGcsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DestinationGcsArgs | DestinationGcsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DestinationGcsState | undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["definitionId"] = state ? state.definitionId : undefined;
            resourceInputs["destinationId"] = state ? state.destinationId : undefined;
            resourceInputs["destinationType"] = state ? state.destinationType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceAllocation"] = state ? state.resourceAllocation : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as DestinationGcsArgs | undefined;
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["definitionId"] = args ? args.definitionId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["destinationId"] = undefined /*out*/;
            resourceInputs["destinationType"] = undefined /*out*/;
            resourceInputs["resourceAllocation"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DestinationGcs.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DestinationGcs resources.
 */
export interface DestinationGcsState {
    configuration?: pulumi.Input<inputs.DestinationGcsConfiguration>;
    createdAt?: pulumi.Input<number>;
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
    /**
     * actor or actor definition specific resource requirements. if default is set, these are the requirements that should be
     * set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the
     * platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    resourceAllocation?: pulumi.Input<inputs.DestinationGcsResourceAllocation>;
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DestinationGcs resource.
 */
export interface DestinationGcsArgs {
    configuration: pulumi.Input<inputs.DestinationGcsConfiguration>;
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
