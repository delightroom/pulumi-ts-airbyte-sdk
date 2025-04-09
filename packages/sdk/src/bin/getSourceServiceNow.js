"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceServiceNow = getSourceServiceNow;
exports.getSourceServiceNowOutput = getSourceServiceNowOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceServiceNow(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceServiceNow:getSourceServiceNow", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceServiceNowOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceServiceNow:getSourceServiceNow", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceServiceNow.js.map