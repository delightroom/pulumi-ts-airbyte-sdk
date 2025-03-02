"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceZendeskSupport = getSourceZendeskSupport;
exports.getSourceZendeskSupportOutput = getSourceZendeskSupportOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceZendeskSupport(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZendeskSupport:getSourceZendeskSupport", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceZendeskSupportOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZendeskSupport:getSourceZendeskSupport", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceZendeskSupport.js.map