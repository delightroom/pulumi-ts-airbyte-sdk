"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationConvex = getDestinationConvex;
exports.getDestinationConvexOutput = getDestinationConvexOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationConvex(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationConvex:getDestinationConvex", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationConvexOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationConvex:getDestinationConvex", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationConvex.js.map