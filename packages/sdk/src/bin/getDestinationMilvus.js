"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationMilvus = getDestinationMilvus;
exports.getDestinationMilvusOutput = getDestinationMilvusOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationMilvus(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationMilvus:getDestinationMilvus", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationMilvusOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationMilvus:getDestinationMilvus", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationMilvus.js.map