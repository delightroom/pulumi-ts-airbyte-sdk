"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceMerge = getSourceMerge;
exports.getSourceMergeOutput = getSourceMergeOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceMerge(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMerge:getSourceMerge", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceMergeOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMerge:getSourceMerge", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceMerge.js.map