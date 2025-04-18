"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFreshchat = getSourceFreshchat;
exports.getSourceFreshchatOutput = getSourceFreshchatOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFreshchat(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFreshchat:getSourceFreshchat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFreshchatOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFreshchat:getSourceFreshchat", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFreshchat.js.map