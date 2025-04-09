// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SourceAmplitude extends pulumi.CustomResource {
    /**
     * Get an existing SourceAmplitude resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceAmplitudeState, opts?: pulumi.CustomResourceOptions): SourceAmplitude {
        return new SourceAmplitude(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'airbyte:index/sourceAmplitude:SourceAmplitude';

    /**
     * Returns true if the given object is an instance of SourceAmplitude.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SourceAmplitude {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SourceAmplitude.__pulumiType;
    }

    public readonly configuration!: pulumi.Output<outputs.SourceAmplitudeConfiguration>;
    public /*out*/ readonly createdAt!: pulumi.Output<number>;
    /**
     * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires
     * replacement if changed.
     */
    public readonly definitionId!: pulumi.Output<string>;
    /**
     * Name of the source e.g. dev-mysql-instance.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * actor or actor definition specific resource requirements. if default is set, these are the requirements that should be
     * set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the
     * platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    public /*out*/ readonly resourceAllocation!: pulumi.Output<outputs.SourceAmplitudeResourceAllocation>;
    /**
     * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
     */
    public readonly secretId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly sourceId!: pulumi.Output<string>;
    public /*out*/ readonly sourceType!: pulumi.Output<string>;
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a SourceAmplitude resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceAmplitudeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SourceAmplitudeArgs | SourceAmplitudeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SourceAmplitudeState | undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["definitionId"] = state ? state.definitionId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceAllocation"] = state ? state.resourceAllocation : undefined;
            resourceInputs["secretId"] = state ? state.secretId : undefined;
            resourceInputs["sourceId"] = state ? state.sourceId : undefined;
            resourceInputs["sourceType"] = state ? state.sourceType : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as SourceAmplitudeArgs | undefined;
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["definitionId"] = args ? args.definitionId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["secretId"] = args ? args.secretId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["resourceAllocation"] = undefined /*out*/;
            resourceInputs["sourceId"] = undefined /*out*/;
            resourceInputs["sourceType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SourceAmplitude.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SourceAmplitude resources.
 */
export interface SourceAmplitudeState {
    configuration?: pulumi.Input<inputs.SourceAmplitudeConfiguration>;
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
    resourceAllocation?: pulumi.Input<inputs.SourceAmplitudeResourceAllocation>;
    /**
     * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
     */
    secretId?: pulumi.Input<string>;
    sourceId?: pulumi.Input<string>;
    sourceType?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SourceAmplitude resource.
 */
export interface SourceAmplitudeArgs {
    configuration: pulumi.Input<inputs.SourceAmplitudeConfiguration>;
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
