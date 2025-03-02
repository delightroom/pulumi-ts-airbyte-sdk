"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceStripe = getSourceStripe;
exports.getSourceStripeOutput = getSourceStripeOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceStripe(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceStripe:getSourceStripe", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceStripeOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceStripe:getSourceStripe", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceStripe.js.map