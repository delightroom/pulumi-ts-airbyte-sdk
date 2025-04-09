"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceGitbook = getSourceGitbook;
exports.getSourceGitbookOutput = getSourceGitbookOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceGitbook(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGitbook:getSourceGitbook", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceGitbookOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceGitbook:getSourceGitbook", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceGitbook.js.map