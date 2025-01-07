"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceTwitter = getSourceTwitter;
exports.getSourceTwitterOutput = getSourceTwitterOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceTwitter(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceTwitter:getSourceTwitter", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceTwitterOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceTwitter:getSourceTwitter", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceTwitter.js.map