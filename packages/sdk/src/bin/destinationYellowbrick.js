"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationYellowbrick = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class DestinationYellowbrick extends pulumi.CustomResource {
    /**
     * Get an existing DestinationYellowbrick resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new DestinationYellowbrick(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of DestinationYellowbrick.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DestinationYellowbrick.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["definitionId"] = state ? state.definitionId : undefined;
            resourceInputs["destinationId"] = state ? state.destinationId : undefined;
            resourceInputs["destinationType"] = state ? state.destinationType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceAllocation"] = state ? state.resourceAllocation : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        }
        else {
            const args = argsOrState;
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
        super(DestinationYellowbrick.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.DestinationYellowbrick = DestinationYellowbrick;
/** @internal */
DestinationYellowbrick.__pulumiType = 'airbyte:index/destinationYellowbrick:DestinationYellowbrick';
//# sourceMappingURL=destinationYellowbrick.js.map