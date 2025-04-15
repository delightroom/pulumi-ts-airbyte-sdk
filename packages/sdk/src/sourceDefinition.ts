// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SourceDefinition extends pulumi.CustomResource {
    /**
     * Get an existing SourceDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceDefinitionState, opts?: pulumi.CustomResourceOptions): SourceDefinition {
        return new SourceDefinition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'airbyte:index/sourceDefinition:SourceDefinition';

    /**
     * Returns true if the given object is an instance of SourceDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SourceDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SourceDefinition.__pulumiType;
    }

    public readonly dockerImageTag!: pulumi.Output<string>;
    /**
     * Requires replacement if changed.
     */
    public readonly dockerRepository!: pulumi.Output<string>;
    /**
     * Requires replacement if changed.
     */
    public readonly documentationUrl!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a SourceDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceDefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SourceDefinitionArgs | SourceDefinitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SourceDefinitionState | undefined;
            resourceInputs["dockerImageTag"] = state ? state.dockerImageTag : undefined;
            resourceInputs["dockerRepository"] = state ? state.dockerRepository : undefined;
            resourceInputs["documentationUrl"] = state ? state.documentationUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as SourceDefinitionArgs | undefined;
            if ((!args || args.dockerImageTag === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dockerImageTag'");
            }
            if ((!args || args.dockerRepository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dockerRepository'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["dockerImageTag"] = args ? args.dockerImageTag : undefined;
            resourceInputs["dockerRepository"] = args ? args.dockerRepository : undefined;
            resourceInputs["documentationUrl"] = args ? args.documentationUrl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SourceDefinition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SourceDefinition resources.
 */
export interface SourceDefinitionState {
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
 * The set of arguments for constructing a SourceDefinition resource.
 */
export interface SourceDefinitionArgs {
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
