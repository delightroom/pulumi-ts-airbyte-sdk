"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceEmailoctopus = getSourceEmailoctopus;
exports.getSourceEmailoctopusOutput = getSourceEmailoctopusOutput;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSourceEmailoctopus(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEmailoctopus:getSourceEmailoctopus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
function getSourceEmailoctopusOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("airbyte:index/getSourceEmailoctopus:getSourceEmailoctopus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}
//# sourceMappingURL=getSourceEmailoctopus.js.map