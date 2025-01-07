"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationFirebolt = getDestinationFirebolt;
exports.getDestinationFireboltOutput = getDestinationFireboltOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationFirebolt(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationFirebolt:getDestinationFirebolt", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationFireboltOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationFirebolt:getDestinationFirebolt", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationFirebolt.js.map