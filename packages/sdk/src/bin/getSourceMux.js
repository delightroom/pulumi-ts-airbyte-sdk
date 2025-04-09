"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceMux = getSourceMux;
exports.getSourceMuxOutput = getSourceMuxOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceMux(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceMux:getSourceMux", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceMuxOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceMux:getSourceMux", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceMux.js.map