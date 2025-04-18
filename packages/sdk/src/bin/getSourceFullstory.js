"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFullstory = getSourceFullstory;
exports.getSourceFullstoryOutput = getSourceFullstoryOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceFullstory(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFullstory:getSourceFullstory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceFullstoryOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceFullstory:getSourceFullstory", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceFullstory.js.map