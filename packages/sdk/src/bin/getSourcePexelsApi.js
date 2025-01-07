"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourcePexelsApi = getSourcePexelsApi;
exports.getSourcePexelsApiOutput = getSourcePexelsApiOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourcePexelsApi(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePexelsApi:getSourcePexelsApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourcePexelsApiOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourcePexelsApi:getSourcePexelsApi", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourcePexelsApi.js.map