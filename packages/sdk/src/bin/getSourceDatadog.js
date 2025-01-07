"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceDatadog = getSourceDatadog;
exports.getSourceDatadogOutput = getSourceDatadogOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceDatadog(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceDatadog:getSourceDatadog", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceDatadogOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceDatadog:getSourceDatadog", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceDatadog.js.map