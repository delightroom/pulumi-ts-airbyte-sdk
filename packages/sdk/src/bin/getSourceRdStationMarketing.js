"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceRdStationMarketing = getSourceRdStationMarketing;
exports.getSourceRdStationMarketingOutput = getSourceRdStationMarketingOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceRdStationMarketing(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceRdStationMarketing:getSourceRdStationMarketing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceRdStationMarketingOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceRdStationMarketing:getSourceRdStationMarketing", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceRdStationMarketing.js.map