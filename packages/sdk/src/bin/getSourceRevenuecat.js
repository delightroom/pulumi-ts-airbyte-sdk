"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceRevenuecat = getSourceRevenuecat;
exports.getSourceRevenuecatOutput = getSourceRevenuecatOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceRevenuecat(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRevenuecat:getSourceRevenuecat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceRevenuecatOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRevenuecat:getSourceRevenuecat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceRevenuecat.js.map