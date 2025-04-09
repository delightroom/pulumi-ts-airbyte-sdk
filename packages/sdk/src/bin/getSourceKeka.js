"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceKeka = getSourceKeka;
exports.getSourceKekaOutput = getSourceKekaOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceKeka(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceKeka:getSourceKeka", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceKekaOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceKeka:getSourceKeka", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceKeka.js.map