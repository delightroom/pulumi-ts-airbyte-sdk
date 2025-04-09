"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceZohoAnalyticsMetadataApi = getSourceZohoAnalyticsMetadataApi;
exports.getSourceZohoAnalyticsMetadataApiOutput = getSourceZohoAnalyticsMetadataApiOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceZohoAnalyticsMetadataApi(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZohoAnalyticsMetadataApi:getSourceZohoAnalyticsMetadataApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceZohoAnalyticsMetadataApiOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZohoAnalyticsMetadataApi:getSourceZohoAnalyticsMetadataApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceZohoAnalyticsMetadataApi.js.map