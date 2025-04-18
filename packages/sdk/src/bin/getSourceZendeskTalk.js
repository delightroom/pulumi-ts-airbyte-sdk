"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceZendeskTalk = getSourceZendeskTalk;
exports.getSourceZendeskTalkOutput = getSourceZendeskTalkOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceZendeskTalk(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceZendeskTalk:getSourceZendeskTalk", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceZendeskTalkOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceZendeskTalk:getSourceZendeskTalk", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceZendeskTalk.js.map