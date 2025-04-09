"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFlexmail = getSourceFlexmail;
exports.getSourceFlexmailOutput = getSourceFlexmailOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFlexmail(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFlexmail:getSourceFlexmail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFlexmailOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFlexmail:getSourceFlexmail", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFlexmail.js.map