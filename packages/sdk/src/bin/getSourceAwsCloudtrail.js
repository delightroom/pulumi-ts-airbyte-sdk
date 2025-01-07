"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceAwsCloudtrail = getSourceAwsCloudtrail;
exports.getSourceAwsCloudtrailOutput = getSourceAwsCloudtrailOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceAwsCloudtrail(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAwsCloudtrail:getSourceAwsCloudtrail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceAwsCloudtrailOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceAwsCloudtrail:getSourceAwsCloudtrail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceAwsCloudtrail.js.map