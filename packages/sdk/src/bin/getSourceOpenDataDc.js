"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceOpenDataDc = getSourceOpenDataDc;
exports.getSourceOpenDataDcOutput = getSourceOpenDataDcOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceOpenDataDc(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceOpenDataDc:getSourceOpenDataDc", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceOpenDataDcOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceOpenDataDc:getSourceOpenDataDc", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceOpenDataDc.js.map