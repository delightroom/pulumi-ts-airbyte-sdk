"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationS3 = getDestinationS3;
exports.getDestinationS3Output = getDestinationS3Output;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationS3(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationS3:getDestinationS3", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationS3Output(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationS3:getDestinationS3", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationS3.js.map