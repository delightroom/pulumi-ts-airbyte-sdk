"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationPubsub = getDestinationPubsub;
exports.getDestinationPubsubOutput = getDestinationPubsubOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationPubsub(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationPubsub:getDestinationPubsub", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationPubsubOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationPubsub:getDestinationPubsub", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationPubsub.js.map