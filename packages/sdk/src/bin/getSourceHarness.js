"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceHarness = getSourceHarness;
exports.getSourceHarnessOutput = getSourceHarnessOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceHarness(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceHarness:getSourceHarness", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceHarnessOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceHarness:getSourceHarness", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceHarness.js.map