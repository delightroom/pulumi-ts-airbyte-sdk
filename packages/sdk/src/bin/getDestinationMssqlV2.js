"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDestinationMssqlV2 = getDestinationMssqlV2;
exports.getDestinationMssqlV2Output = getDestinationMssqlV2Output;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDestinationMssqlV2(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationMssqlV2:getDestinationMssqlV2", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
function getDestinationMssqlV2Output(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getDestinationMssqlV2:getDestinationMssqlV2", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getDestinationMssqlV2.js.map