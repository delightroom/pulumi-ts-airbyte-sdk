"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationCustom = getDestinationCustom;
exports.getDestinationCustomOutput = getDestinationCustomOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationCustom(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationCustom:getDestinationCustom", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationCustomOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationCustom:getDestinationCustom", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationCustom.js.map