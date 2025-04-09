"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * The provider type for the airbyte package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        {
            resourceInputs["bearerAuth"] = (args === null || args === void 0 ? void 0 : args.bearerAuth) ? pulumi.secret(args.bearerAuth) : undefined;
            resourceInputs["clientId"] = (args === null || args === void 0 ? void 0 : args.clientId) ? pulumi.secret(args.clientId) : undefined;
            resourceInputs["clientSecret"] = (args === null || args === void 0 ? void 0 : args.clientSecret) ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["password"] = (args === null || args === void 0 ? void 0 : args.password) ? pulumi.secret(args.password) : undefined;
            resourceInputs["serverUrl"] = args ? args.serverUrl : undefined;
            resourceInputs["tokenUrl"] = (args === null || args === void 0 ? void 0 : args.tokenUrl) ? pulumi.secret(args.tokenUrl) : undefined;
            resourceInputs["username"] = (args === null || args === void 0 ? void 0 : args.username) ? pulumi.secret(args.username) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["bearerAuth", "clientId", "clientSecret", "password", "tokenUrl", "username"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Provider = Provider;
/** @internal */
Provider.__pulumiType = 'airbyte';
//# sourceMappingURL=provider.js.map