"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFacebookPages = getSourceFacebookPages;
exports.getSourceFacebookPagesOutput = getSourceFacebookPagesOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFacebookPages(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFacebookPages:getSourceFacebookPages", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFacebookPagesOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFacebookPages:getSourceFacebookPages", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFacebookPages.js.map