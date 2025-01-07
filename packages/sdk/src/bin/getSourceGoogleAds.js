"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceGoogleAds = getSourceGoogleAds;
exports.getSourceGoogleAdsOutput = getSourceGoogleAdsOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceGoogleAds(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGoogleAds:getSourceGoogleAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceGoogleAdsOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGoogleAds:getSourceGoogleAds", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceGoogleAds.js.map