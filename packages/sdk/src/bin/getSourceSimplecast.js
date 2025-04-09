"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceSimplecast = getSourceSimplecast;
exports.getSourceSimplecastOutput = getSourceSimplecastOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceSimplecast(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSimplecast:getSourceSimplecast", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceSimplecastOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceSimplecast:getSourceSimplecast", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceSimplecast.js.map